// Central definition of the four project directions and their build
// companions. Update copy, colors, or artwork references here — nothing
// else in the app needs to change.

export type ChoiceId =
  | "interactive-tool"
  | "live-data"
  | "signed-in-portal"
  | "standalone-app";

export interface Choice {
  id: ChoiceId;
  label: string;
  companionName: string;
  description: string;
  exampleProject: string;
  accentColor: string;
  artworkSrc: string;
  artworkAlt: string;
}

export const CHOICES: Choice[] = [
  {
    id: "interactive-tool",
    label: "An interactive tool",
    companionName: "The Tinkerer",
    description:
      "A curious builder surrounded by controls, tools, and moving parts — happiest when something responds the moment you touch it.",
    exampleProject: "A calculator, configurator, quiz, or planning tool.",
    accentColor: "#FF6B00",
    artworkSrc: "/characters/interactive-tool.svg",
    artworkAlt:
      "The Tinkerer, a build companion surrounded by dials, levers, and small moving mechanisms.",
  },
  {
    id: "live-data",
    label: "A live data experience",
    companionName: "The Signal Keeper",
    description:
      "A character surrounded by signals, changing data points, and rhythmic pulses — always watching what just changed.",
    exampleProject:
      "A property search, availability lookup, live schedule, or inventory experience.",
    accentColor: "#146EF5",
    artworkSrc: "/characters/live-data.svg",
    artworkAlt:
      "The Signal Keeper, a build companion surrounded by pulsing signals and shifting data points.",
  },
  {
    id: "signed-in-portal",
    label: "A signed-in portal",
    companionName: "The Guide",
    description:
      "A character associated with a key, a badge, and an organized personal space — built to lead someone somewhere specific.",
    exampleProject:
      "A customer account, employee resource, member dashboard, or private document center.",
    accentColor: "#7A3DFF",
    artworkSrc: "/characters/signed-in-portal.svg",
    artworkAlt:
      "The Guide, a build companion holding a key beside an organized doorway.",
  },
  {
    id: "standalone-app",
    label: "A standalone app",
    companionName: "The Pathfinder",
    description:
      "An explorer with a map and a launch trail — comfortable building a small independent world from scratch.",
    exampleProject:
      "An event planner, internal tool, focused web product, or experimental experience.",
    accentColor: "#00D722",
    artworkSrc: "/characters/standalone-app.svg",
    artworkAlt:
      "The Pathfinder, a build companion standing beside a map and a launch trail.",
  },
];

export function getChoiceById(id: string): Choice | undefined {
  return CHOICES.find((choice) => choice.id === id);
}

export const CHOICE_IDS = CHOICES.map((choice) => choice.id) as ChoiceId[];
