# Testing for the existence of silly bias in GPT models

We run a series of prompts asking GPT3.5 to name random things from a collection (e.g. UK Towns or chocolate bars), or write sentences containing them. We pull the named item into a running total, and save a list of what the model is most likely to mention.

## How to run:

Add a .env file with an OpenAI API key, like so:

```OPENAI_API_KEY="API_KEY"```

Choose which test you want to run by setting 

```const CHOSEN_TEST = "your test"``` in ```testRunner.js```

Run ```node testRunner.js```

Sit and wait (it can take a while)
