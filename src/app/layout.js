// import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "@/layouts/Nav/Nax";
import Footer from "@/layouts/Footer/Footer";

const monst = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TreeStar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monst.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}