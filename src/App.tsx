import { useEffect, useState } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import WhyItMatters from "./sections/WhyItMatters";
import Problem from "./sections/Problem";
import Ecosystem from "./sections/Ecosystem";
import Podcart from "./sections/Podcart";
import Offloadr from "./sections/Offloadr";
import ProducerMode from "./sections/ProducerMode";
import RemoteCollab from "./sections/RemoteCollab";
import MediaIdentity from "./sections/MediaIdentity";
import Pricing from "./sections/Pricing";
import Founder from "./sections/Founder";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";
import Pitch from "./pages/Pitch";

function getRoute(): string {
  if (typeof window === "undefined") return "/";
  const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
  let p = window.location.pathname.replace(/\/+$/, "");
  if (base && p.startsWith(base)) p = p.slice(base.length);
  return p || "/";
}

function Marketing() {
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
        <MediaIdentity />
        <Pricing />
        <Founder />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState<string>(getRoute());

  useEffect(() => {
    const handler = () => setRoute(getRoute());
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  if (route === "/pitch") {
    return <Pitch />;
  }

  return <Marketing />;
}
