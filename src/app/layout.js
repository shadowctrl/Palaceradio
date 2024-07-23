import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Palace radio - Crystal Palace Football Club Match Day Radio ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
