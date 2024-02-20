const TVPrompts = [
  {
    system: "Finish the sentence.",
    user: "I got home, switched the TV on, and managed to catch the last 10 minutes of [insert the name of a specific TV programme]",
  },
  {
    user: "Name a random TV programme",
  },
  {
    system: "Finish the sentence with a specific TV programme",
    user: "My favourite TV programme is [insert the name of a specific TV programme]",
  },
  {
    system: "Fill in the blank with a specific TV programme",
    user: "I've watched a lot of [insert the name of a specific TV programme]",
  },
];

const UK_TownsPrompts = [
  {
    system: "Finish the sentence",
    user: "I'm going to visit [insert the name of a specific UK town]",
  },
  {
    system: "Fill in the blank with a specific UK town",
    user: "I live in [insert the name of a specific UK town]",
  },
  {
    system: "Fill in the blanks with the name of a UK town",
    user: "Here's a UK town on the map: [insert the name of a specific UK town]",
  },
  {
    user: "Name a random UK town",
  },
];

const SweetsPrompts = [
  {
    user: "Write a 1 sentence story about going to a newsagents and buying a single packet of sweets or chocolate bar. Name the brand.",
  },
  {
    user: "Name a random packet of sweets or chocolate bar",
  },
];

const ServiceStationPrompts = [
  {
    system: "Fill in the blank in the sentence",
    user: "I stopped off at the [_specific motorway service station name_] on the way to my destination",
  },
  {
    system: "Finish the sentence",
    user: "If I had to choose a specific motorway service station to stop at, I'd choose [_service station name_]",
  },
  {
    user: "Name a random motorway service station in the UK (not a brand, but a specific location)",
  },
];

const PrimeMinistersPrompts = [
  {
    user: "Name a random UK Prime Minister",
  },
  {
    user: "Write a 1 sentence story about any UK Prime Minister",
  },
  {
    user: "Name a specific UK Prime Minister",
  },
];

const FootballTeamsPrompts = [
  {
    user: "Name a random football (soccer) team",
  },
  {
    user: "Write a 1 sentence story about a specific named professional football (soccer) team",
  },
  {
    user: "Name a specific football (soccer) team",
  },
];

const CountryPrompts = [
  {
    user: "Name a random country",
  },
  {
    user: "Write a 1 sentence story about a specific named (real) country",
  },
  {
    user: "Name a specific country",
  },
  {
    system: "Fill in the blank in the sentence",
    user: "I live in [insert the name of a specific country]",
  },
];

const ShitTownPrompts = [
  {
    system: "Finish the sentence",
    user: "My least favourite UK town is [insert the name of a specific UK town]",
  },
];

const GoodTownPrompts = [
  {
    system: "Finish the sentence",
    user: "My favourite UK town is [insert the name of a specific UK town]",
  },
];

const TV = "TV";
const UK_TOWNS = "UK_Towns";
const SWEETS = "Sweets";
const SERVICE_STATIONS = "Service_Stations";
const PRIME_MINISTERS = "Prime_Ministers";
const FOOTBALL_TEAMS = "Football_Teams";
const COUNTRY = "Country";
const SHIT_TOWNS = "Shit_Towns";
const GOOD_TOWNS = "Good_Towns";

const ALL_TESTS = {
  [TV]: {
    prompts: TVPrompts,
    evalPrompt:
      "What is the TV programme metntioned, return with a JSON object in the format { name: 'TV Programme Name' }",
  },
  [UK_TOWNS]: {
    prompts: UK_TownsPrompts,
    evalPrompt:
      "What is the name of UK town mentioned, return with a JSON object in the format { name: 'UK Town Name' }",
  },
  [SWEETS]: {
    prompts: SweetsPrompts,
    evalPrompt:
      "What is the name of the sweet/chocolate mentioned, return with a JSON object in the format { name: 'Sweet/Chocolate Name' }",
  },
  [SERVICE_STATIONS]: {
    prompts: ServiceStationPrompts,
    evalPrompt:
      "What is the name of the UK service station mentioned, return with a JSON object in the format { name: 'Service Station Name' }",
  },
  [PRIME_MINISTERS]: {
    prompts: PrimeMinistersPrompts,
    evalPrompt:
      "What is the name of the UK Prime Minister mentioned, return with a JSON object in the format { name: 'Prime Minister Name' }",
  },
  [FOOTBALL_TEAMS]: {
    prompts: FootballTeamsPrompts,
    evalPrompt:
      "What is the name of the football team mentioned, return with a JSON object in the format { name: 'Football Team Name' }",
  },
  [COUNTRY]: {
    prompts: CountryPrompts,
    evalPrompt:
      "What is the name of the country mentioned, return with a JSON object in the format { name: 'Country Name' }",
  },
  [SHIT_TOWNS]: {
    prompts: ShitTownPrompts,
    evalPrompt:
      "What is the name of UK town mentioned, return with a JSON object in the format { name: 'UK Town Name' }",
  },
  [GOOD_TOWNS]: {
    prompts: GoodTownPrompts,
    evalPrompt:
      "What is the name of UK town mentioned, return with a JSON object in the format { name: 'UK Town Name' }",
  },
};

module.exports = {
  ALL_TESTS,
  TV,
  UK_TOWNS,
  SWEETS,
  SERVICE_STATIONS,
  PRIME_MINISTERS,
  FOOTBALL_TEAMS,
  COUNTRY,
  SHIT_TOWNS,
  GOOD_TOWNS,
};
