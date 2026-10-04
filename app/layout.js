import { Bricolage_Grotesque, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-schibsted",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata = {
  title: "Hassan Ali Portfolio",
  description:
    "Hassan Ali, MERN stack developer from Islamabad. React, Node.js, Express, MongoDB and Firebase projects with live demos.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${schibsted.variable} ${plex.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}