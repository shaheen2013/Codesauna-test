import "./globals.css";

import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon-32x32.png" sizes="any" />
      </head>
      <body className={`${hankenGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
