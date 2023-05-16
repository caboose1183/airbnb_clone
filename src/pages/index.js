import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

// data should be fetched from API, but copied json from example
import { exploreData } from "../../public/exploreData";
import { cardsData } from "../../public/cardsData";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData, cardsData }) {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
