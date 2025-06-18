import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import { words } from "@/data";
import { IoMdContact } from "react-icons/io";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      id="home"
    >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Turning Ideas into AI Solutions
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Bringing Ideas to Life Through Code and Design"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            <span>Hi! I&apos;m Jayesh,</span>
            <FlipWords words={words} />
            <span>based in India.</span>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://drive.google.com/file/d/16Qj2BlL2oAqnkVr-_YNHYWGiFQcYoq8I/view?usp=sharing">
              <MagicButton
                title="Download CV "
                icon={<IoMdContact />}
                position="right"
              />
            </a>
            <a href="mailto:jayeshshrivastava815@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
