import { lotties } from "@/components/lottie/lotties";
import { Category } from "../categories";

export type Project = {
  title: string;
  date: string;
  description: string;
  categories: Category[];
  link: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
};

export const projects: Project[] = [
  {
    title: "1BRC Challenge",
    date: "10 April 2024",
    description: "1 Billion Row Challenge by Artsiom Korzun",
    categories: ["events", "engineering"],
    link: "/",
    author: {
      name: "Artsiom Korzun",
      avatar: "default.jpg",
    },
    image: "1brc-sm.png",
  },
  {
    title: "CryptoCortex Integrates with Fusion",
    date: "06 December 2023",
    description: "CryptoCortex Integrates with Fusion Digital Assets Exchange",
    categories: ["trading", "news"],
    link: "/",
    author: {
      name: "DELTIX",
      avatar: "logo_icon.svg",
    },
    image: "C2_0.svg",
  },
  {
    title: "AI DIAL Open Source",
    date: "21 November 2023",
    description:
      "We are excited to announce that AI DIAL is now a part of the open-source community!",
    categories: ["news", "ai"],
    link: "/",
    author: {
      name: "DELTIX",
      avatar: "logo_icon.svg",
    },
    image: "dial0.svg",
  },
  {
    title: "AI DIAL Announce",
    date: "26 June 2023",
    description:
      "Please welcome our new product AI DIAL - a secure, scalable, and customizable enterprise-grade AI ecosystem that seamlessly integrates with any custom data and workflows, tailored to achieve unique business objectives.",
    categories: ["news", "ai"],
    link: "/",
    author: {
      name: "DELTIX",
      avatar: "logo_icon.svg",
    },
    image: "dial.svg",
  },
  {
    title: "Measuring WebSocket Data Feed Latency",
    date: "15 April 2023",
    description:
      "In this research, we describe a method for measuring network latency in a WebSocket-based market data feed on the example of a BINANCE exchange.",
    categories: ["engineering", "trading"],
    link: "/",
    author: {
      name: "Barys Chupryn",
      avatar: "default2.jpg",
    },
    image: "lat2.jpg",
  },
  {
    title: "Reliable AI Lab is Open!",
    date: "14 April 2023",
    description:
      "RAIL (Reliable AI Lab) is a research center where we investigate the OpenAI ecosystem and adjust it for the development of commercial products and applications.",
    categories: ["news", "ai"],
    link: "/",
    author: {
      name: "DELTIX",
      avatar: "logo_icon.svg",
    },
    image: "component.svg",
  },
  {
    title: "Interactive GPT-World Map (Beta)",
    date: "13 April 2023",
    description:
      "An extensive visual database developed by RAIL with hundreds of research papers and technical reports related to GPT technology.",
    categories: ["engineering", "ai"],
    link: "/",

    author: {
      name: "Aliaksei Labanau",
      avatar: "default3.jpg",
    },
    image: "ai-map2.png",
  },
  {
    title: "AI Assistant for IntelliJ IDEA",
    date: "12 April 2023",
    description:
      "Try an AI-powered code assistant developed by RAIL to unlock the full power of ChatGPT to generate code, write unit tests and documentation.",
    categories: ["engineering", "ai"],
    link: "/",

    author: {
      avatar: "anton.jpg",
      name: "Anton Dubovik",
    },
    image: "ai-duck.svg",
  },
  {
    title: "QuantHub Product Launch",
    date: "03 October 2022",
    description:
      "We are proud and very excited to announce the launch of our new product called QuantHub.",
    categories: ["news"],
    link: "/",

    author: {
      name: "DELTIX",
      avatar: "logo_icon.svg",
    },
    image: "quanthub-outer.png",
  },
  {
    title: "Spread Trader Product Launch",
    date: "29 September 2022",
    description:
      "We are proud and very excited to announce the launch of our new product called Spread Trader.",
    categories: ["news"],
    link: "/",

    author: {
      name: "Artsiom Fridman",
      avatar: "default4.jpg",
    },

    image: "spread-trader-outer.png",
  },
  {
    title: "EPIC Institute of Technology Round",
    date: "17 June 2022",
    description:
      "We welcome everyone to take part in the EPIC Institute of Technology round on Codeforces.",
    categories: ["events", "news"],
    link: "/",

    author: {
      name: "Uladzislau Vishneuski",
      avatar: "default5.jpg",
    },

    image: "cf-logo-6.png",
  },
  {
    title: "Open-Source Crypto Connectors",
    date: "23 May 2022",
    description:
      "With TimeBase Community Edition you get access to open-source connectors to the most popular crypto exchanges.",
    categories: ["trading", "news"],
    link: "/",
    author: {
      name: "TimeBase",
      avatar: "timebase.png",
    },
    image: "tb-ce4.png",
  },
  {
    title: "EPIC Institute of Technology",
    date: "23 May 2022",
    description: "The grand opening of EPIC Institute of Technology!",
    categories: ["events", "news"],
    link: "/",
    author: {
      name: "DELTIX",
      avatar: "logo_icon.svg",
    },
    image: "epic.png",
  },
  {
    title: "Deltix is Hiring",
    date: "08 April 2022",
    description:
      "We are excited to announce a new educational resource that is coming soon under the Deltix umbrella. Welcome to join our rock star teaching team!",
    categories: ["news"],
    link: "/",
    author: {
      name: "DELTIX",
      avatar: "logo_icon.svg",
    },
    image: "hiring-1.png",
  },
  {
    title: "Using TimeBase as Data Storage For IoT Devices",
    date: "28 November 2021",
    description:
      "This article describes an example of using TimeBase to store and analyze data from an IoT device.",
    categories: ["engineering", "iot"],
    link: "/",
    author: {
      name: "Eugene Pisarchick",
      avatar: "eugene.jpg",
    },
    image: "esp_board.jpg",
  },
  {
    title: "Deltix Codeforces Autumn Round",
    date: "26 November 2021",
    description:
      "Welcome to the third installment of our rounds. We have prepared valuable trophies for participants and winners.",
    categories: ["events", "news"],
    link: "/",

    author: {
      name: "Uladzislau Vishneuski",
      avatar: "default5.jpg",
    },
    image: "cf-logo.png",
  },

  {
    title: "TimeBase Web Admin Community Release",
    date: "01 November 2021",
    description:
      "We are excited to announce that we have released TimeBase Web Admin Community Edition.",
    categories: ["news"],
    link: "/",
    author: {
      name: "TimeBase",
      avatar: "timebase.png",
    },
    image: "tb-ce4.svg",
  },
  {
    title: "Ultralight Event Processing",
    date: "14 October 2021",
    description: "Ultralight event processing in Java by Andy Malakov",
    categories: ["events", "engineering"],
    link: "/",
    author: {
      name: "Andy Malakov",
      avatar: "default6.jpg",
    },
    image: "zed_bg.png",
  },
  {
    title:
      "How machine learning can improve trading bots profitability on Crypto markets.",
    date: "09 October 2021",
    description:
      "This article describes an experiment carried out in QuantOffice Cloud to improve a trading bots profitability with the help of machine learning techniques.",
    categories: ["trading", "machine learning", "algorithms", "math", "ai"],
    link: "/",
    author: {
      name: "Sviatlana Staleuskaya",
      avatar: "default7.jpg",
    },
    image: "background-out.jpg",
  },
  {
    title: "Reinforcement Learning",
    date: "25 August 2021",
    description:
      "This article describes simple hacks you can use to train a bot in a very complex environment on a regular notebook in a relatively short time using only reinforcement learning, without the need for huge computational clusters and professional players’ game records.",
    categories: ["machine learning", "algorithms", "math", "ai"],
    link: "/",
    author: {
      name: "Mikalai Pechaneu",
      avatar: "default8.jpg",
    },
    image: "reinforcement-learning.png",
  },
];

export const categoryLotties: {
  [key in Category]: keyof typeof lotties;
} = {
  news: "news",
  engineering: "engineering",
  trading: "trading",
  ai: "iot",
  events: "events",
  algorithms: "algorithms",
  iot: "iot",
  "machine learning": "machineLearning",
  math: "math",
};
