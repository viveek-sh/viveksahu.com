import { Project } from "@/components/ProjectGridSection";

export const Projects: Project[] = [
  {
    title: "exchange-lab.",
    description:
      "A high-performance exchange simulation featuring an in-memory matching engine and real-time market data streaming.",
    image: "/project.webp",
    techStack: ["TypeScript", "Node.js", "Redis", "Next.js"],
    liveLink: "",
    githubLink: "https://github.com/viveek-sh/exchange-lab",
    credentials: { user: "admin", pass: "123" },
  },
  {
    title: "Gym buddy.",
    description:
      "A modern web app that helps gym-goers follow structured workout splits and calculate fitness metrics like BMI.",
    image: "/project-2.webp",
    techStack: [
      "Next.js",
      "ShadCN UI",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare R2",
    ],
    liveLink: "https://viveek-sh.github.io/gym-buddy/",
    githubLink: "https://github.com/viveek-sh/gym-buddy",
  },
  {
    title: "Flight fare predictor.",
    description:
      "Machine learning project predicting flight ticket prices using Random Forest Regression with a Flask API.",
    image: "/project.webp",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas"],
    liveLink: "#",
    githubLink: "https://github.com/viveek-sh/flight-fare-predictor",
  },
];
