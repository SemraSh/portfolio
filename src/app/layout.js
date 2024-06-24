import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Semra Shukrieva",
  description: "web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <menu>
          |<Link href={"/"}>me</Link>|<Link href={"/resume"}>resume</Link>
        </menu>
        {children}
      </body>
    </html>
  );
}
