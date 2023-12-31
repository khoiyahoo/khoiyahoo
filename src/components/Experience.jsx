import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#2f3240",
        color: "#fff",
        border: "1px solid #fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #fff", color: "#fff" }}
      date={experience.date}
      iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center h-full w-full">
          <img src={experience.icon} className="w-3/5 h-3/5 object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => {
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
        className="mt-12"
        viewport={{ once: false }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>👨🏻‍💻 Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
