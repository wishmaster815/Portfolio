import React from "react";
import { EvervaultCard, Icon } from "./ui/EvervaultCard";
import { codingLinks } from "@/data";

const CodingProfile = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        <span className="text-purple">Problem Solving Profiles</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full">
        {codingLinks.map((item) => (
          <div
            key={item.id}
            className=" text-center  border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-10 p-1 w-auto relative min-h-full "
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <a href={item.Link}>
              <EvervaultCard text={item.title} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfile;
