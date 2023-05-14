import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

// data should be fetched from API, but copied json from example
import { exploreData } from "../../public/exploreData";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData }) {
  return (
    <main className="">
      <Head>
        <title>Airbnb Clone</title>
      </Head>

      <Header />

      <Banner />

      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull data from server */}
          {exploreData?.map((item) => (
            <h1 key={item.location}>{item.location}</h1>
          ))}
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      exploreData,
    },
  };
}
