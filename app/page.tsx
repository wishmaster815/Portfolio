"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div style={{ height: "60px" }} /> {/* Spacer for navbar */}
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <div id="contact" style={{ height: "120px", marginTop: "-120px" }}></div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
