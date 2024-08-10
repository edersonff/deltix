/**
 * DELTIX DELTIX

Trading

News
06 December 2023

CryptoCortex Integrates with Fusion
CryptoCortex Integrates with Fusion Digital Assets Exchange

Read more >
DELTIX DELTIX

News

AI
21 November 2023

AI DIAL Open Source
We are excited to announce that AI DIAL is now a part of the open-source community!

Read more >
DELTIX DELTIX

News

AI
26 June 2023

AI DIAL Announce
Please welcome our new product AI DIAL - a secure, scalable, and customizable enterprise-grade AI ecosystem that seamlessly integrates with any custom data and workflows, tailored to achieve unique business objectives.

Read more >
Barys Chupryn Barys Chupryn

Engineering

Trading
15 April 2023

Measuring WebSocket Data Feed Latency
In this research, we describe a method for measuring network latency in a WebSocket-based market data feed on the example of a BINANCE exchange.

Read more >
DELTIX DELTIX

News

AI
14 April 2023

Reliable AI Lab is Open!
RAIL (Reliable AI Lab) is a research center where we investigate the OpenAI ecosystem and adjust it for the development of commercial products and applications.

Read more >
Aliaksei Labanau Aliaksei Labanau

Engineering

AI
13 April 2023

Interactive GPT-World Map (Beta)
An extensive visual database developed by RAIL with hundreds of research papers and technical reports related to GPT technology.

Read more >
Anton Dubovik Anton Dubovik

Engineering

AI
12 April 2023

AI Assistant for IntelliJ IDEA
Try an AI-powered code assistant developed by RAIL to unlock the full power of ChatGPT to generate code, write unit tests and documentation.

Read more >
DELTIX DELTIX

News
03 October 2022

QuantHub Product Launch
We are proud and very excited to announce the launch of our new product called QuantHub.

Read more >
Artsiom Fridman Artsiom Fridman

News
29 September 2022

Spread Trader Product Launch
We are proud and very excited to announce the launch of our new product called Spread Trader.

Read more >
Uladzislau Vishneuski Uladzislau Vishneuski

Events

News
17 June 2022

EPIC Institute of Technology Round
We welcome everyone to take part in the EPIC Institute of Technology round on Codeforces.

Read more >
TimeBase TimeBase

Trading

News
23 May 2022

Open-Source Crypto Connectors
With TimeBase Community Edition you get access to open-source connectors to the most popular crypto exchanges.

Read more >
DELTIX DELTIX

Events

News
23 May 2022

EPIC Institute of Technology
The grand opening of EPIC Institute of Technology!

Read more >
DELTIX DELTIX

News
08 April 2022

Deltix is Hiring
We are excited to announce a new educational resource that is coming soon under the Deltix umbrella. Welcome to join our rock star teaching team!

Read more >
Eugene Pisarchick Eugene Pisarchick

Engineering

IoT
28 November 2021

Using TimeBase as Data Storage For IoT Devices
This article describes an example of using TimeBase to store and analyze data from an IoT device.

Read more >
Uladzislau Vishneuski Uladzislau Vishneuski

Events

News
26 November 2021

Deltix Codeforces Autumn Round
Welcome to the third installment of our rounds. We have prepared valuable trophies for participants and winners.

Read more >
TimeBase TimeBase

News
01 November 2021

TimeBase Web Admin Community Release
We are excited to announce that we have released TimeBase Web Admin Community Edition.

Read more >
Andy Malakov Andy Malakov

Events

Engineering
14 October 2021

Ultralight Event Processing
Ultralight event processing in Java by Andy Malakov

Read more >
Sviatlana Staleuskaya Sviatlana Staleuskaya

Trading

Machine Learning

Algorithms
09 October 2021

How machine learning can improve trading bots profitability on Crypto markets.
This article describes an experiment carried out in QuantOffice Cloud to improve a trading bots profitability with the help of machine learning techniques.

Read more >
Mikalai Pechaneu Mikalai Pechaneu

Machine Learning

Algorithms

Math

AI
25 August 2021

Reinforcement Learning
This article describes simple hacks you can use to train a bot in a very complex environment on a regular notebook in a relatively short time using only reinforcement learning, without the need for huge computational clusters and professional players’ game records.

Read more >
 */

/**
 * public/images/posts/1brc-sm.png public/images/posts/ai-duck.svg public/images/posts/ai-map2.png public/images/posts/background -out.jpg public/images/posts/C2_0.svg public/images/posts/cf-logo.png public/images/posts/cf-logo-6.png public/images/posts/component.svg public/images/posts/dial.svg public/images/posts/dial0.svg public/images/posts/epic.png public/images/posts/esp_board.jpg public/images/posts/hiring-1.png public/images/posts/lat2.jpg public/images/posts/quanthub-outer.png public/images/posts/reinforcement-learning.png public/images/posts/spread-trader-outer.png public/images/posts/tb.svg public/images/posts/tb-ce4.svg public/images/posts/zed_bg.png
 */

import { Category } from "../categories";

export type Product = {
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

export const projects: Product[] = [
  {
    title: "1BRC Challenge",
    date: "10 April 2024",
    description: "1 Billion Row Challenge by Artsiom Korzun",
    categories: ["events", "engineering"],
    link: "/",
    author: {
      name: "Artsiom Korzun",
      avatar: "1brc-sm.png",
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
    image: "ai-duck.svg",
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
    image: "ai-map2.png",
  },
];
