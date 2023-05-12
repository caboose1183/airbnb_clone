import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      
      <Header />

      {/* Banner */}
    </main>
  );
}
