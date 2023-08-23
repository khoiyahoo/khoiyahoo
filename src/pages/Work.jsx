import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Experience } from "../components";
import { divideimg } from "../assets";
import Footer from "../components/Footer";
const ProjectCard = ({
  index,
  name,
  description,
  responsibility,
  tags,
  image,
  openSource,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#2f3240] p-5 rounded-2xl w-full h-full flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {openSource && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  className="h-1/2 w-1/2 object-contain"
                  alt=""
                />
              </div>
            )}
            {/* {openSource && (
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/sahilxkhadka/resturant-website",
                    "_blank"
                  )
                }
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  className="h-1/2 w-1/2 object-contain"
                  alt=""
                />
              </div>
            )} */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <p className="mt-2 text-secondary text-[14px]">
            Responsibilities: {responsibility}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[15px] font-semibold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Experience />
      <div className="px-32 bg-[#1c1f2e]">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>💻 Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-5 justify-between ">
          {projects.map((project, index) => {
            return (
              <div className="sm:w-[49%] w-full flex" key={`project-${index}`}>
                <ProjectCard {...project} index={index} />
              </div>
            );
          })}
        </div>
      </div>
      <img src={divideimg} alt="ảnh" className="w-full h-8" />
      <Footer />
    </>
  );
};

export default Works;
