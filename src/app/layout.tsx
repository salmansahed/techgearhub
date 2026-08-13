import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import NextThemeProvider from "../providers/NextThemeProvider";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tech Gear Hub",
  description: "Your one-stop shop for all things tech!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${josefinSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
