import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {} from "../assets";

import { languages, frotnend, backends, toolservice } from "../constants";

const ItemServiceCard = ({ index, title, logo }) => {
  return (
    <div
      className="badge border rounded-md py-1 px-3 flex justify-center items-center m-1 "
      key={index}
    >
      <img src={logo} alt="ảnh" className="w-[20px] h-[20px] mr-2" />
      <p className="text-sm">{title}</p>
    </div>
  );
};

const ServiceCard = ({ index, title, itemCards }) => {
  const tiltRef = useRef(null); // Create a ref for Tilt component

  return (
    <Tilt ref={tiltRef} className="lg:min-w-[260px] min-w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <h3 className="text-white text-[20px] text-center font-bold">
          {title}
        </h3>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-3 px-4 flex  flex-wrap"
        >
          {/* <img src={icon} alt="" className="w-16 h-16 object-contain" /> */}
          {itemCards?.map((item, index) => (
            <ItemServiceCard title={item.title} logo={item?.logo} key={index} />
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        🌱 I'm a web developer skilled in Sass, Bootstrap, and Tailwind for
        creating responsive UI. With expertise in TypeScript, React, React
        Native, Figma Design and Redux Saga, I build scalable web apps that
        deliver exceptional user experiences. I prioritize clean coding and stay
        up-to-date with trends to exceed expectations. Let's work together on
        your next project.
      </motion.p>
      <div className="mt-20 lg:flex-row flex flex-col  gap-8">
        <ServiceCard title={"Languages"} itemCards={languages} />
        <ServiceCard title={"Frontend"} itemCards={frotnend} />
        <ServiceCard title={"Backend"} itemCards={backends} />
        <ServiceCard title={"Tools & Services"} itemCards={toolservice} />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
