const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");
const mammoth = require("mammoth");

const { analyzeResume } = require("../controllers/aiController");

const router = express.Router();

/* =========================================================
   UPLOAD CONFIGURATION
   ========================================================= */

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Only PDF and DOCX resume files are supported."),
        false
      );
    }
  },
});

/* =========================================================
   RESUME TEXT EXTRACTION
   ========================================================= */

const readResumeFile = async (filePath, mimeType) => {
  try {
    if (mimeType === "application/pdf") {
      const buffer = fs.readFileSync(filePath);
      const parser = new PDFParse({ data: buffer });
const result = await parser.getText();

const text = result.text;

await parser.destroy();

      return text || "";
    }

    if (
      mimeType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({
        path: filePath,
      });

      return result.value || "";
    }

    return "";
  } catch (error) {
    console.error("Resume text extraction error:", error);
    throw new Error("Unable to read the uploaded resume.");
  }
};

/* =========================================================
   CLEANUP TEMPORARY FILE
   ========================================================= */

const removeUploadedFile = (filePath) => {
  try {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error("File cleanup error:", error.message);
  }
};

/* =========================================================
   RESUME ANALYZER
   POST /api/ai/analyze-resume
   ========================================================= */

router.post(
  "/analyze-resume",
  upload.single("resume"),
  async (req, res) => {
    let filePath = null;

    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload a PDF or DOCX resume.",
        });
      }

      filePath = req.file.path;

      const resumeText = await readResumeFile(
        req.file.path,
        req.file.mimetype
      );

      if (!resumeText.trim()) {
        return res.status(400).json({
          success: false,
          message: "Could not extract readable text from the resume.",
        });
      }

      req.body.text = resumeText;

      const result = await analyzeResume(req, res);

      return result;
    } catch (error) {
      console.error("Resume Analyzer error:", error);

      if (!res.headersSent) {
        return res.status(500).json({
          success: false,
          message: "Resume analysis failed. Please try again.",
        });
      }
    } finally {
      removeUploadedFile(filePath);
    }
  }
);

/* =========================================================
   LEGACY RESUME ANALYZER ROUTE
   POST /api/ai/analyze

   Kept so your existing frontend does NOT break.
   ========================================================= */

router.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {
    let filePath = null;

    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload a PDF or DOCX resume.",
        });
      }

      filePath = req.file.path;

      const resumeText = await readResumeFile(
        req.file.path,
        req.file.mimetype
      );

      if (!resumeText.trim()) {
        return res.status(400).json({
          success: false,
          message: "Could not extract readable text from the resume.",
        });
      }

      req.body.text = resumeText;

      const result = await analyzeResume(req, res);

      return result;
    } catch (error) {
      console.error("Resume analysis error:", error);

      if (!res.headersSent) {
        return res.status(500).json({
          success: false,
          message: "Resume analysis failed. Please try again.",
        });
      }
    } finally {
      removeUploadedFile(filePath);
    }
  }
);

/* =========================================================
   CAREER MATCH
   POST /api/ai/career-match

   This is the route that was missing and causing:

   404 POST /api/ai/career-match
   ========================================================= */

router.post("/career-match", async (req, res) => {
  try {
    const { education, interest, skills } = req.body;

    /* -----------------------------------------------------
       VALIDATION
       ----------------------------------------------------- */

    if (!education || !interest || !skills) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide education, career interest and skills.",
      });
    }

    /* -----------------------------------------------------
       GEMINI API KEY
       ----------------------------------------------------- */

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing in .env");

      return res.status(500).json({
        success: false,
        message: "Gemini API key is not configured.",
      });
    }

    /* -----------------------------------------------------
       CAREER PROMPT
       ----------------------------------------------------- */

    const prompt = `
You are CareerCopilot AI, a professional career guidance assistant.

Analyze the student's profile and provide a personalized,
practical and realistic career recommendation.

STUDENT PROFILE

Education:
${education}

Career Interest:
${interest}

Technical Skills:
${skills}

Provide the response in a professional and easy-to-read format.

Include:

1. Best Career Direction
2. Why This Career Fits
3. Recommended Job Roles
4. Skills To Improve
5. Technologies To Learn
6. Project Ideas
7. Short-Term Action Plan
8. Long-Term Career Advice

Do not make unrealistic promises.
Give practical advice suitable for a computer engineering student.

Keep the response clear, structured and useful.
`;

    /* -----------------------------------------------------
       GEMINI REQUEST
       ----------------------------------------------------- */

    const model =
      process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

    const geminiUrl =
      `https://generativelanguage.googleapis.com/v1beta/models/` +
      `${model}:generateContent?key=${apiKey}`;

    console.log("AI ROUTE CALLED");
    console.log("Sending career profile to Gemini...");
    console.log(`Trying Gemini model: ${model}`);

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],

        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1800,
        },
      }),
    });

    /* -----------------------------------------------------
       GEMINI ERROR HANDLING
       ----------------------------------------------------- */

    const geminiData = await geminiResponse.json();

    if (!geminiResponse.ok) {
      console.error(
        "Gemini API error:",
        JSON.stringify(geminiData, null, 2)
      );

      return res.status(502).json({
        success: false,
        message:
          "Career recommendation service is temporarily unavailable.",
      });
    }

    /* -----------------------------------------------------
       EXTRACT AI RESPONSE
       ----------------------------------------------------- */

    const careerResult =
      geminiData?.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("\n")
        .trim();

    if (!careerResult) {
      console.error(
        "Gemini returned an empty career recommendation."
      );

      return res.status(502).json({
        success: false,
        message:
          "Gemini did not return a career recommendation. Please try again.",
      });
    }

    console.log("Gemini career response received.");
    console.log("Career recommendation completed successfully.");

    /* -----------------------------------------------------
       SUCCESS RESPONSE
       ----------------------------------------------------- */

    return res.status(200).json({
      success: true,
      result: careerResult,
      message: "Career recommendation generated successfully.",
    });
  } catch (error) {
    console.error("Career Match error:", error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to generate your career recommendation right now. Please try again.",
    });
  }
});

/* =========================================================
   ROUTE ERROR HANDLER
   ========================================================= */

router.use((error, req, res, next) => {
  console.error("AI route error:", error);

  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "Resume file must be smaller than 5 MB.",
      });
    }

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  if (error.message) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong with the AI service.",
  });
});

/* =========================================================
   EXPORT
   ========================================================= */
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "AI routes are working"
  });
});

module.exports = router;