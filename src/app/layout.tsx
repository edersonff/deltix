import type { Metadata } from "next";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Deltix - Software Development",
  description:
    "Technology for the research &amp; development of advanced quantitative strategies",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Deltix - Software Development",
    title: "Deltix - Software Development",
    description:
      "Technology for the research &amp; development of advanced quantitative strategies",
    images: [
      {
        url: process.env.NEXT_PUBLIC_URL + "/og/image.webp",
        width: 1280,
        height: 720,
        alt: "Deltix - Software Development",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <>{children}</>
    </Providers>
  );
}
