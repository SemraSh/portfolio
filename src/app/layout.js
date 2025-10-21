import { Inter, Allura } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";

const inter = Inter({ subsets: ["latin"] });
const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

export const metadata = {
  title: "Semra Sh",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${allura.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
