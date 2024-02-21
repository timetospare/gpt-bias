const fs = require("fs");
const runSingleTest = require("./runSingleTest");
const {
  ALL_TESTS,
  TV,
  SWEETS,
  UK_TOWNS,
  SERVICE_STATIONS,
  PRIME_MINISTERS,
  FOOTBALL_TEAMS,
  COUNTRY,
  SHIT_TOWNS,
  GOOD_TOWNS,
  HOMEWORK,
  NAMES,
  DISNEY_PRINCESSES,
  EASY_AS,
  DANGER,
  MORE_DANGER,
} = require("./prompts");

const MAX_TESTS = 10;
const MAX_PARALLEL_TESTS = 2;

// Choose the test to run
const CHOSEN_TEST = MORE_DANGER;

const bucketIntoChunks = (arr) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += MAX_PARALLEL_TESTS) {
    chunks.push(arr.slice(i, i + MAX_PARALLEL_TESTS));
  }
  return chunks;
};

const testRunner = async () => {
  let existingOutcomes;
  try {
    existingOutcomes = JSON.parse(
      fs.readFileSync(`./output/${CHOSEN_TEST}-outcomes.json`)
    );
  } catch (e) {
    // swallow silently no stress
  }

  const outcomes = existingOutcomes || {};
  let usage;

  const runTestAndRecordOutcome = async (prompt, evalPrompt) => {
    const result = await runSingleTest(prompt, evalPrompt);
    const { usage: testUsage } = result;

    if (!usage) {
      usage = testUsage;
    } else {
      Object.keys(testUsage).forEach((key) => {
        usage[key] += testUsage[key];
      });
    }

    try {
      const json = result?.evaluation?.name
        ? result.evaluation
        : JSON.parse(result.evaluation);
      if (json.name) {
        outcomes[json.name] = (outcomes[json.name] || 0) + 1;
      } else {
        console.log(`Test failed`);
        console.log({ json });
      }
    } catch (e) {
      console.log(`Test failed`);
      console.log(result.evaluation);
    }
  };

  const chunks = bucketIntoChunks(Array(MAX_TESTS).fill(0));

  for (let i = 0; i < chunks.length; i++) {
    console.log(`Running chunk ${i + 1} of ${chunks.length}`);
    const chunk = chunks[i];
    await Promise.all(
      chunk.map((item, idx) =>
        runTestAndRecordOutcome(
          ALL_TESTS[CHOSEN_TEST].prompts[
            Math.floor(Math.random() * ALL_TESTS[CHOSEN_TEST].prompts.length)
          ],
          ALL_TESTS[CHOSEN_TEST].evalPrompt
        )
      )
    );
    console.log(`Chunk ${i + 1} completed`);
    console.log(`Outcomes so far:`, outcomes);
  }

  console.log({ outcomes, usage });

  if (outcomes) {
    fs.writeFileSync(
      `./output/${CHOSEN_TEST}-outcomes.json`,
      JSON.stringify(outcomes, null, 2)
    );
  }
};

testRunner();
