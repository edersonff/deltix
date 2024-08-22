import { lotties } from "@/components/lottie/lotties";

export type Category =
  | "events"
  | "engineering"
  | "trading"
  | "machine learning"
  | "algorithms"
  | "math"
  | "news"
  | "iot"
  | "ai";

export type CategoriesType = {
  label: string;
  icon: keyof typeof lotties;
  color: string;
  colorHex: string;
};

export const categories: CategoriesType[] = [
  {
    label: "Events",
    icon: "events",
    color: "text-cyan-800",
    colorHex: "#155e75",
  },
  {
    label: "Engineering",
    icon: "engineering",
    color: "text-red-800",
    colorHex: "#991b1b",
  },
  {
    label: "Trading",
    icon: "trading",
    color: "text-amber-800",
    colorHex: "#92400e",
  },
  {
    label: "Machine Learning",
    icon: "machineLearning",
    color: "text-purple-800",
    colorHex: "#6b21a8",
  },
  {
    label: "Algorithms",
    icon: "algorithms",
    color: "text-pink-800",
    colorHex: "#9d174d",
  },
  {
    label: "Math",
    icon: "math",
    color: "text-teal-800",
    colorHex: "#115e59",
  },
  {
    label: "News",
    icon: "news",
    color: "text-green-800",
    colorHex: "#166534",
  },
  {
    label: "IoT",
    icon: "iot",
    color: "text-orange-800",
    colorHex: "#9a3412",
  },
];
