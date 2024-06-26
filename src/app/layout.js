import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Semra Sh",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
