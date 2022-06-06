import type { NextPage } from 'next';
import CustomHead from "../components/custom-head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Technologies from "../components/technologies";
import Contributors from "../components/contributors";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-primary-dark font-fira-code">
        <CustomHead title="Chit Chats" />

        <div className="min-h-screen w-full flex flex-col">
            <Navbar />
            <Hero />
        </div>

        <Features />
        <Technologies />
        <Contributors />
    </div>
  );
};

export default Home;
