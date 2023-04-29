import Image from "next/image";
import { Inter } from "next/font/google";
import { Landing } from "../src/Landing";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Landing />
    </main>
  );
}
