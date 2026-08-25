const { GoogleGenAI } = require("@google/genai");

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is missing in .env");
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

// Wait helper
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Check whether an error is temporary
function isRetryableError(error) {
  const message = String(error?.message || error || "").toLowerCase();

  return (
    message.includes("503") ||
    message.includes("unavailable") ||
    message.includes("429") ||
    message.includes("resource_exhausted") ||
    message.includes("rate limit") ||
    message.includes("overloaded") ||
    message.includes("internal")
  );
}

// Call Gemini with retry + model fallback
async function generateWithRetry(prompt) {
  const models = [
    "gemini-3.5-flash-lite",
    "gemini-2.5-flash-lite",
  ];

  let lastError = null;

  for (const model of models) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(
          `Trying Gemini model: ${model} | Attempt ${attempt}/3`
        );

        const response = await ai.models.generateContent({
          model: model,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });

        console.log(`✅ Gemini response received from ${model}`);

        return response;
      } catch (error) {
        lastError = error;

        console.error(
          `❌ Gemini error with ${model}, attempt ${attempt}:`,
          error?.message || error
        );

        if (!isRetryableError(error)) {
          throw error;
        }

        if (attempt < 3) {
          const delay = 2000 * Math.pow(2, attempt - 1);

          console.log(
            `⏳ Gemini temporarily unavailable. Retrying in ${
              delay / 1000
            } seconds...`
          );

          await wait(delay);
        }
      }
    }

    console.log(`⚠️ Trying next Gemini model...`);
  }

  throw lastError;
}

// Analyze Resume
const analyzeResume = async (req, res) => {
  try {
    console.log("AI ROUTE CALLED");

    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Resume text is required",
      });
    }

    console.log("Sending resume to Gemini...");

    const prompt = `
You are an expert career counselor and resume analyzer.

Analyze the following resume carefully.

Return ONLY valid JSON.
Do not use markdown.
Do not use code fences.
Do not add any explanation outside the JSON.

The JSON MUST have exactly these fields:

{
  "experienceLevel": "string",
  "overallAdvice": "string",
  "strengths": ["string"],
  "missingSkills": ["string"],
  "careerSuggestions": ["string"],
  "resumeImprovementTips": ["string"]
}

Resume:

${text}
`;

    const response = await generateWithRetry(prompt);

    let responseText = "";

    // @google/genai response normally exposes .text
    if (typeof response.text === "string") {
      responseText = response.text;
    } else if (typeof response.text === "function") {
      responseText = response.text();
    } else {
      responseText =
        response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    }

    if (!responseText) {
      throw new Error("Gemini returned an empty response");
    }

    console.log("Gemini raw response received");

    // Remove accidental markdown code fences if Gemini adds them
    responseText = responseText
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let analysis;

    try {
      analysis = JSON.parse(responseText);
    } catch (jsonError) {
      console.error("❌ JSON parsing error:", jsonError.message);
      console.error("Gemini response:", responseText);

      return res.status(500).json({
        success: false,
        message: "Gemini returned an invalid response",
      });
    }

    // Make sure arrays exist
    analysis.experienceLevel =
      analysis.experienceLevel || "Not specified";

    analysis.overallAdvice =
      analysis.overallAdvice || "Keep improving your technical and professional skills.";

    analysis.strengths = Array.isArray(analysis.strengths)
      ? analysis.strengths
      : [];

    analysis.missingSkills = Array.isArray(analysis.missingSkills)
      ? analysis.missingSkills
      : [];

    analysis.careerSuggestions = Array.isArray(
      analysis.careerSuggestions
    )
      ? analysis.careerSuggestions
      : [];

    analysis.resumeImprovementTips = Array.isArray(
      analysis.resumeImprovementTips
    )
      ? analysis.resumeImprovementTips
      : [];

    console.log("✅ Resume analysis completed successfully");

    return res.status(200).json({
      success: true,
      analysis: analysis,
    });
  } catch (error) {
    console.error("❌ Gemini AI Error:", error);

    const message = String(error?.message || error || "");

    if (
      message.includes("503") ||
      message.toLowerCase().includes("unavailable") ||
      message.toLowerCase().includes("overloaded")
    ) {
      return res.status(503).json({
        success: false,
        message:
          "Gemini is temporarily busy. Please wait a few seconds and try again.",
      });
    }

    if (
      message.includes("429") ||
      message.toLowerCase().includes("resource_exhausted")
    ) {
      return res.status(429).json({
        success: false,
        message:
          "Gemini request limit reached. Please wait and try again.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to analyze resume",
      error: message,
    });
  }
};

module.exports = {
  analyzeResume,
};