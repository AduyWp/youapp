import { Inter } from "next/font/google";
import "../../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
      <div className={inter.className}>{children}</div>
  );
}