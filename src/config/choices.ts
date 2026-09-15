// Central definition of the four project directions and their build
// artifacts. Update copy, colors, or artwork references here — nothing
// else in the app needs to change.

export type ChoiceId =
  | "interactive-tool"
  | "live-data"
  | "signed-in-portal"
  | "standalone-app";

export interface Choice {
  id: ChoiceId;
  label: string;
  artifactName: string;
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
    artifactName: "Control Deck",
    description:
      "A panel of dials, buttons, and switches, built to respond the instant it's touched — every input has a clear, immediate effect.",
    exampleProject: "A calculator, configurator, quiz, or planning tool.",
    accentColor: "#FF6B00",
    artworkSrc: "/artifacts/interactive-tool.png",
    artworkAlt:
      "Control Deck, a low-poly control panel with glowing buttons, a joystick, and switches.",
  },
  {
    id: "live-data",
    label: "A live data experience",
    artifactName: "Signal Beacon",
    description:
      "A glowing core that pulses with every incoming signal, radiating outward each time something new comes in.",
    exampleProject:
      "A property search, availability lookup, live schedule, or inventory experience.",
    accentColor: "#146EF5",
    artworkSrc: "/artifacts/live-data.png",
    artworkAlt:
      "Signal Beacon, a low-poly glowing blue orb radiating pulses of light from a dark pedestal.",
  },
  {
    id: "signed-in-portal",
    label: "A signed-in portal",
    artifactName: "Key Portal",
    description:
      "A threshold that only opens for the right key — built to lead someone straight to their own organized space.",
    exampleProject:
      "A customer account, employee resource, member dashboard, or private document center.",
    accentColor: "#7A3DFF",
    artworkSrc: "/artifacts/signed-in-portal.png",
    artworkAlt:
      "Key Portal, a low-poly glowing archway with a key fragment floating beside it.",
  },
  {
    id: "standalone-app",
    label: "A standalone app",
    artifactName: "Launch Pod",
    description:
      "A sealed shell that cracks open to reveal something new — built to stand on its own from the moment it launches.",
    exampleProject:
      "An event planner, internal tool, focused web product, or experimental experience.",
    accentColor: "#00D722",
    artworkSrc: "/artifacts/standalone-app.png",
    artworkAlt:
      "Launch Pod, a low-poly cracked-open orb glowing from within, mounted on a stand.",
  },
];

export function getChoiceById(id: string): Choice | undefined {
  return CHOICES.find((choice) => choice.id === id);
}

export const CHOICE_IDS = CHOICES.map((choice) => choice.id) as ChoiceId[];
