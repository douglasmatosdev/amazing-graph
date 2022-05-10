import type { NextPage } from "next"
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home
