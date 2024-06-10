import { Inter,Roboto,Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zero Bounce",
  description: "Email Validation and Emil List Cleaning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} wrapper`}>
        <Navbar/>
          {children}
        {/* <Contact/> */}
        </body>
    </html>
  );
}
