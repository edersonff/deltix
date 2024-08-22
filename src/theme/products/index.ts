export type Product = {
  name: string;
  description: string;
  logo: string;
  background: string;
  href: string;
};

/**
 Products
CryptoCortex
TimeBase
MarketMaker
QuantOffice Cloud
RTMath
EMBER Server
CryptoCortex
CryptoCortex
CryptoCortex
Best in class white label and highly customizable trading platform across all asset classes for brokers, dealers, exchanges, sell-side traders, liquidity providers.

Read more >
TimeBase
TimeBase
TimeBase
TimeBase is a high-performance time-series database, messaging system, and data modeling framework, designed for very fast data aggregation and retrieval.

Read more >
MarketMaker
MarketMaker
MarketMaker
C2 MarketMaker is a specialized product developed by the DELTIX team to solve use cases of market makers, hedgers, and price arbitrageurs.

Read more >
QuantOffice Cloud
QuantOffice Cloud
QuantOffice Cloud
QuantOffice Cloud is a specialized, integrated environment for development, prototyping, back-testing of different execution strategies, and live trading.

Read more >
RTMath
RTMath
RTMath
RTMath provides a set of .NET and Java components and libraries for numerical calculations and analysis. RTMath components offer both ultra-fast execution and efficient memory usage.

Read more >
EMBER Server
EMBER Server
EMBER Server
Execution Server (code name “Ember”) specializes in reliable and fast processing of trading signals for financial markets. Ember is also a stream processor for high-frequency trading.

Read more >
 */

export const products: Product[] = [
  {
    name: "Crypto<span style='color: #27C0F1;'>Cortex</span>",
    description:
      "Best in class white label and highly customizable trading platform across all asset classes for brokers, dealers, exchanges, sell-side traders, liquidity providers.",
    href: "#",
    logo: "c2-logo.png",
    background: "cwui3.png",
  },
  {
    name: "Time<span style='color: #2586db;'>Base</span>",
    description:
      "TimeBase is a high-performance time-series database, messaging system, and data modeling framework, designed for very fast data aggregation and retrieval.",
    href: "#",
    logo: "timebase-logo.png",
    background: "timebase-prod.png",
  },
  {
    name: "Market<span style='color: #3a7ab8;'>Maker</span>",
    description:
      "C2 MarketMaker is a specialized product developed by the DELTIX team to solve use cases of market makers, hedgers, and price arbitrageurs.",
    href: "#",
    logo: "marketmaker-logo.png",
    background: "marketmaker-prod.png",
  },
  {
    name: "Quant<span style='color: #3a7ab8;'>Office</span> Cloud",
    description:
      "QuantOffice Cloud is a specialized, integrated environment for development, prototyping, back-testing of different execution strategies, and live trading.",
    href: "#",
    logo: "quantoffice-logo.png",
    background: "quantoffice-prod.png",
  },
  {
    name: "RT<span style='color: #c27c2a;'>Math</span>",
    description:
      "RTMath provides a set of .NET and Java components and libraries for numerical calculations and analysis. RTMath components offer both ultra-fast execution and efficient memory usage.",
    href: "#",
    logo: "rtmath-logo.png",
    background: "rtmath-prod.png",
  },
  {
    name: "EMBER <span style='color: #c27c2a;'>Server</span>",
    description:
      "Execution Server (code name “Ember”) specializes in reliable and fast processing of trading signals for financial markets. Ember is also a stream processor for high-frequency trading.",
    href: "#",
    logo: "ember-logo.png",
    background: "ember-prod.png",
  },
];
