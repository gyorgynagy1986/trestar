
import Hero from "@/layouts/Hero/Hero";
import Banner from "@/components/BannerText";
import Partners from "@/layouts/Partners/Partners";
import Solutions from "@/layouts/Solutions/Solutions";
import WhoWeAre from "@/layouts/WhoWeAre/WhoWeAre";
import WhoWeAreMobile from "@/layouts/WhoWeAre/WhoWeAreMobile";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <main>
        <Partners />
        <Solutions />
        <WhoWeAre />
        <WhoWeAreMobile />
      </main>
      <Banner />
    </>
  );
}
