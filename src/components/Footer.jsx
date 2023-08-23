import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { socials } from "../constants";

const Footer = () => {
  return (
    <div className="flex bg-[#282a36] h-28 gap-7 flex-wrap justify-center pt-10">
      <p>Khoi © 2023 </p>
      <ul className="flex gap-7">
        <li>✈️ Travel</li>
        <li>⚽ Soccer</li>
        <li>🌇Sunset</li>
      </ul>
    </div>
  );
};

export default Footer;
