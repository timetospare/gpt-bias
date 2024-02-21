const OpenAI = require("openai");
// use dotenv to read .env file
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const runSingleTest = async (prompt, evalPrompt) => {
  const messages = [];
  if (prompt.system) {
    messages.push({
      role: "system",
      content: prompt.system,
    });
  }
  if (prompt.user) {
    messages.push({
      role: "user",
      content: prompt.user,
    });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages,
      temperature: 1,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    let usage;

    const completion = response.choices[0].message.content;

    if (response.usage) {
      usage = response.usage;
    }

    if (evalPrompt) {
      const evalResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
          {
            role: "system",
            content: evalPrompt,
          },
          {
            role: "user",
            content: completion,
          },
        ],
        temperature: 0,
        max_tokens: 100,
        response_format: { type: "json_object" },
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      if (evalResponse.usage) {
        Object.keys(evalResponse.usage).forEach((key) => {
          usage[key] += evalResponse.usage[key];
        });
      }

      console.log({
        completion,
        prompt,
        evaluation: evalResponse.choices[0].message.content,
      });

      return {
        prompt,
        completion,
        usage,
        evaluation: evalResponse.choices[0].message.content,
      };
    } else {
      return {
        prompt,
        completion,
        usage,
        evaluation: {
          name: completion,
        },
      };
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

module.exports = runSingleTest;
