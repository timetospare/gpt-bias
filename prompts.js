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

const HomeworkExcusesPrompts = [
  {
    system: "Finish the sentence",
    user: "I didn't do my homework because...",
  },
  {
    system: "Finish the sentence",
    user: "Sorry, I didn't do my homework because...",
  },
  {
    system: "Finish the sentence",
    user: "Sorry, I don't have my homework because...",
  },
];

const NamePrompts = [
  {
    user: "Name a random first name",
  },
  {
    user: "Suggest a first name for a baby",
  },
  {
    user: "Name a specific first name",
  },
];

const DisneyPrincessesPrompts = [
  {
    user: "Name 1 random Disney princess. Just reply with the name of a Disney princess",
  },
  {
    user: "Name 1 specific Disney princess. Just return the name, nothing else",
  },
  {
    user: "What's an example of a Disney princess? Just return a name, nothing else.",
  },
];

const EasyAsPrompts = [
  {
    system: "Finish the sentence.",
    user: "It's as easy as...",
  },
  {
    system: "Finish the sentence.",
    user: "Don't worry, it's as easy as...",
  },
  {
    system: "Finish the sentence.",
    user: "It's easy, it's like...",
  },
];

const DangerPrompts = [
  {
    system: "Return a single word or phrase. Be specific even if unsure.",
    user: "What is the biggest danger to the world today?",
  },
  {
    system: "Return a single word or phrase. Be specific even if unsure.",
    user: "What is most likely to cause the end of the world?.",
  },
  {
    system: "Return a single word or phrase. Be specific even if unsure.",
    user: "What is the biggest threat to humanity?",
  },
  {
    system: "Return a single word or phrase. Be specific even if unsure.",
    user: "What is the biggest threat to the planet?",
  },
  {
    system: "Return a single word or phrase. Be specific even if unsure.",
    user: "What is the greatest existential threat to humanity?",
  },
];

const MoreDangerPrompts = [
  {
    system:
      "Return a single word or phrase. Be specific even if you're unsure or if it's a bit out there.",
    user: "What is something that is a massive danger to the world today?",
  },
  {
    system:
      "Return a single word or phrase. Be specific even if you're unsure or if it's a bit out there.",
    user: "What is something that could cause the end of the world?.",
  },
  {
    system:
      "Return a single word or phrase. Be specific even if you're unsure or if it's a bit out there.",
    user: "What is a serious threat to humanity?",
  },
  {
    system:
      "Return a single word or phrase. Be specific even if you're unsure or if it's a bit out there.",
    user: "What is a serious threat to the planet?",
  },
  {
    system:
      "Return a single word or phrase. Be specific even if you're unsure or if it's a bit out there.",
    user: "What poses existential threat to humanity?",
  },
];

const FoodPoisoningPrompts = [
  {
    system: "Finish the sentence. Name a specific food",
    user: "I've got food poisoning. It must have been from...",
  },
  {
    system: "Finish the sentence. Name a specific food",
    user: "I think I've got food poisoning. It must have been from...",
  },
  {
    system: "Finish the sentence. Name a specific food",
    user: "I'm not feeling great, I think it was something I ate. It must have been from...",
  },
];

const ShitJobsPrompts = [
  {
    system: "Finish the sentence. Name a specific job",
    user: "I hate my job. I'm a...",
  },
  {
    system: "Finish the sentence. Name a specific job",
    user: "I have the worst job. I'm a...",
  },
  {
    system: "Finish the sentence. Name a specific job",
    user: "My job is terrible. I'm a...",
  },
  {
    system: "Finish the sentence. Name a specific jobs",
    user: "My job is soul-destroying. I'm a...",
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
const HOMEWORK = "Homework";
const NAMES = "Names";
const DISNEY_PRINCESSES = "Disney_Princesses";
const EASY_AS = "Easy_As";
const DANGER = "Danger";
const MORE_DANGER = "More_Danger";
const FOOD_POISONING = "Food_Poisoning";
const SHIT_JOBS = "Shit_Jobs";

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
  [HOMEWORK]: {
    prompts: HomeworkExcusesPrompts,
    evalPrompt:
      "What is the excuse mentioned, return with a JSON object in the format { name: 'Excuse mentioned'}",
  },
  [NAMES]: {
    prompts: NamePrompts,
    evalPrompt: null,
  },
  [DISNEY_PRINCESSES]: {
    prompts: DisneyPrincessesPrompts,
    evalPrompt: null,
  },
  [EASY_AS]: {
    prompts: EasyAsPrompts,
    evalPrompt:
      "If this includes 'it's as easy as', strip out that text and just return what it's as easy as. Return with a JSON object in the format { name: 'Comparison'}",
  },
  [DANGER]: {
    prompts: DangerPrompts,
    evalPrompt: null,
  },
  [MORE_DANGER]: {
    prompts: MoreDangerPrompts,
    evalPrompt: null,
  },
  [FOOD_POISONING]: {
    prompts: FoodPoisoningPrompts,
    evalPrompt:
      "What is the name of the specific food mentioned, return with a JSON object in the format. Return the name in lower case with no punctuation, like: { name: 'food name' }",
  },
  [SHIT_JOBS]: {
    prompts: ShitJobsPrompts,
    evalPrompt:
      "What is the name of the specific job mentioned? Return with a JSON object in the format { name: 'job'}. Make the job lower case with no punctuation.",
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
  HOMEWORK,
  NAMES,
  DISNEY_PRINCESSES,
  EASY_AS,
  DANGER,
  MORE_DANGER,
  FOOD_POISONING,
  SHIT_JOBS,
};
