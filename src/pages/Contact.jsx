import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas, StarsCanvas } from "../components/canvas";
import SendingForm from "../components/SendingForm";
import mail from "../assets/mail.json";
import Lottie from "lottie-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send(
        "service_e7p028x",
        "template_rm4f42k",
        {
          from_name: form.name,
          to_name: "Khoi Dinh",
          from_email: form.email,
          to_email: "khoiyahoo@gmail.com",
          message: form.message,
        },
        "V7yUbYfbXvuynSSOw"
      )
      .then(
        () => {
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setSending(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="relative z-0 h-screen flex justify-center items-center">
      <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] py-5 bg-black-100 px-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          {sending ? (
            <div className="flex justify-center items-center h-[450px]">
              <SendingForm />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="mt-4 flex flex-col gap-5 mb-12 md:mb-0"
            >
              <label className="flex flex-col gap-2">
                <span className="text-white">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              <label className="flex flex-col gap-4">
                <span className="text-white">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              <label className="flex flex-col gap-4">
                <span className="text-white">Your Message</span>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit  font-bold text-white rounded-xl shadow-md shadow-primary"
              >
                Send
              </button>
            </form>
          )}
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto xl:mt-8 md:h-[420px] h-[320px] mx-auto w-[240px] mt-60 md:mt-0"
        >
          {/* <EarthCanvas /> */}
          <Lottie animationData={mail} loop={true} />
        </motion.div>
      </div>
      <StarsCanvas />
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
