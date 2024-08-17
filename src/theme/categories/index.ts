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
};

export const categories: CategoriesType[] = [
  {
    label: "Events",
    icon: "events",
    color: "text-cyan-800",
  },
  {
    label: "Engineering",
    icon: "engineering",
    color: "text-red-800",
  },
  {
    label: "Trading",
    icon: "trading",
    color: "text-amber-800",
  },
  {
    label: "Machine Learning",
    icon: "machineLearning",
    color: "text-purple-800",
  },
  {
    label: "Algorithms",
    icon: "algorithms",
    color: "text-pink-800",
  },
  {
    label: "Math",
    icon: "math",
    color: "text-teal-800",
  },
  {
    label: "News",
    icon: "news",
    color: "text-green-800",
  },
  {
    label: "IoT",
    icon: "iot",
    color: "text-orange-800",
  },
];
