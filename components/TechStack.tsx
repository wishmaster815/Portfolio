import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNextdotjs,
  SiFramer,
  SiFigma,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
  SiAmazonaws,
  SiSupabase,
  SiJupyter,
  SiGooglecolab,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

const TechStack = () => {
  return (
    <section id="skills" className="w-full py-20">
      <h1 className="heading">
        <span className="text-purple">Skills and Tech Stack</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Frontend Development"
          icon={<AceternityIcon order="Frontend" />}
          des={
            <div className="grid grid-cols-2 gap-4 mt-4">
              <TechItem
                icon={<SiNextdotjs className="w-8 h-8" />}
                name="Next.Js"
              />
              <TechItem icon={<SiReact className="w-8 h-8" />} name="React" />
              <TechItem
                icon={<SiTypescript className="w-8 h-8" />}
                name="TypeScript"
              />
              <TechItem
                icon={<SiJavascript className="w-8 h-8" />}
                name="JavaScript"
              />
              <TechItem
                icon={<SiTailwindcss className="w-8 h-8" />}
                name="Tailwind CSS"
              />
              <TechItem icon={<SiFigma className="w-8 h-8" />} name="Figma" />
            </div>
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Backend Development"
          icon={<AceternityIcon order="Backend" />}
          des={
            <div className="grid grid-cols-2 gap-4 mt-4">
              <TechItem
                icon={<SiNodedotjs className="w-8 h-8" />}
                name="Node.js"
              />
              <TechItem
                icon={<SiMongodb className="w-8 h-8" />}
                name="MongoDB"
              />
              <TechItem
                icon={<SiSupabase className="w-8 h-8" />}
                name="Supabase"
              />
              <TechItem
                icon={<SiFirebase className="w-8 h-8" />}
                name="Firebase"
              />
              <TechItem
                icon={<SiJsonwebtokens className="w-8 h-8" />}
                name="JWT"
              />
              <TechItem
                icon={<SiPostman className="w-8 h-8" />}
                name="Postman"
              />
            </div>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Artificial Intelligence/ Machine Learning"
          icon={<AceternityIcon order="ML/AI" />}
          des={
            <div className="grid grid-cols-2 gap-4 mt-4">
              <TechItem icon={<SiPython className="w-8 h-8" />} name="Python" />
              <TechItem icon={<SiNumpy className="w-8 h-8" />} name="Numpy" />
              <TechItem icon={<SiPandas className="w-8 h-8" />} name="Pandas" />
              <TechItem
                icon={<SiTensorflow className="w-8 h-8" />}
                name="TensorFlow"
              />
              <TechItem
                icon={<SiPytorch className="w-8 h-8" />}
                name="PyTorch"
              />
              <TechItem
                icon={<SiScikitlearn className="w-8 h-8" />}
                name="Scikit-learn"
              />
              <TechItem
                icon={<SiJupyter className="w-8 h-8" />}
                name="Jupyter"
              />
              <TechItem image="/langchain.png" name="LangChain" />
              <TechItem image="/ollama.png" name="Ollama" />
              <TechItem image="/huggingface.png" name="HuggingFace" />
            </div>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};
export default TechStack;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <div
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {des}
        </div>
      </div>
    </div>
  );
};

const TechItem = ({
  icon,
  name,
  image,
}: {
  icon?: React.ReactNode;
  name: string;
  image?: string;
}) => {
  return (
    <div className="flex items-center gap-2 text-white">
      {icon ? (
        icon
      ) : image ? (
        <img src={image} alt={name} className="w-8 h-8" />
      ) : null}
      <span className="text-sm">{name}</span>
    </div>
  );
};

// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
