import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import WhyItMatters from "./sections/WhyItMatters";
import Problem from "./sections/Problem";
import Ecosystem from "./sections/Ecosystem";
import Podcart from "./sections/Podcart";
import Offloadr from "./sections/Offloadr";
import ProducerMode from "./sections/ProducerMode";
import RemoteCollab from "./sections/RemoteCollab";
import Pricing from "./sections/Pricing";
import Founder from "./sections/Founder";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="bg-bg text-ink min-h-screen">
      <Nav />
      <main>
        <Hero />
        <WhyItMatters />
        <Problem />
        <Ecosystem />
        <Podcart />
        <Offloadr />
        <ProducerMode />
        <RemoteCollab />
        <Pricing />
        <Founder />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
