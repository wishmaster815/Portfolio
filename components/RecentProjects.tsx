"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  return (
    <div className="py-20 " id="projects">
      <h1 className="heading">
        Latest <span className="text-purple">Projects</span> and{" "}
        <span className="text-purple">Experiments</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              // href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 h-full w-auto object-cover"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple hover:text-purple/80 transition-colors"
                  >
                    <FaGithub className="me-2" />
                    <span className="lg:text-xl md:text-xs text-sm">
                      GitHub
                    </span>
                  </a>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple hover:text-purple/80 transition-colors"
                  >
                    <span className="lg:text-xl md:text-xs text-sm">Visit</span>
                    <FaLocationArrow className="ms-2" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <div className="flex justify-center content-center">
        <a href="https://github.com/wishmaster815">
          <MagicButton
            title="More Projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
