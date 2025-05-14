import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Intro />
    <Services />
    <Process />
    <FAQ />
    <Contact />
   </div>
  );
}
