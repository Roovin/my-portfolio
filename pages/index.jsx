import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Skill from "@/components/Skill";
import ContactUs from "@/components/ContactUs";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <About />
      <Skill />
      <ContactUs />
    </Layout>
  );
}
