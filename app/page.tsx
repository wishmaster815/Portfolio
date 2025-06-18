"use client";

import { navItems } from "@/data";
import ClientOnly from "@/components/ui/ClientOnly";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TechStack from "@/components/TechStack";
import CodingProfile from "@/components/CodingProfile";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <ClientOnly>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 scroll-smooth">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <div style={{ height: "60px" }} /> {/* Spacer for navbar */}
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <TechStack />
          <CodingProfile />
          <Footer />
          <ScrollToTop />
        </div>
      </main>
    </ClientOnly>
  );
};

export default Home;
