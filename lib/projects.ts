import { Language, ProjectStatus, Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    name: "Notifier",
    description:
      "A payment notification app developed in Gin that sends notifications through email using the SMTP protocol.",
    status: ProjectStatus.done,
    url: "https://github.com/roberpili/notifier",
    language: Language.go,
  },
  {
    name: "uTracker",
    description:
      "Predict your MMA picks. The API is developed in FastAPI and the model PyTorch.",
    status: ProjectStatus.done,
    url: "https://github.com/roberpili/utracker",
    language: Language.python,
  },
  {
    name: "Mix plugin",
    description:
      "A Counter-Strike 1.6 mix plugin developed for playing matches with friends.",
    status: ProjectStatus.done,
    url: "https://github.com/roberpili/mix-plugin-cs1.6",
    language: Language.pawn,
  },
  {
    name: "Prosenos",
    description:
      "Watch live football and NBA scores in real time. Built with FastAPI and web scraping.",
    status: ProjectStatus.online,
    url: "https://prosenos-frontend.vercel.app/",
    language: Language.python,
  },
  {
    name: "rb",
    description: "My personal CLI Assistant.",
    status: "In Dev",
    url: "https://github.com/roberpili/rb",
    language: Language.go,
  },
];
