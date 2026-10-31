import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={"w-full xs:w-[250px]"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} loading="lazy" className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Full-stack developer with more than 5 years of experience building
        end-to-end solutions in Scrum teams. I work mainly across the
        JavaScript/TypeScript ecosystem with React, Next.js, Vue and Nest.js,
        crafting fast interfaces and backing them with microservices,
        microfrontends and PostgreSQL through Prisma. <br /> I have also worked
        with RabbitMQ for asynchronous processing, Docker, Web3 integrations on
        Ethereum and Solana, and bots and mini-apps for Telegram, Discord and
        WhatsApp. <br /> I care about clean, maintainable code (Clean Code,
        Hexagonal Architecture) and about speeding up the development cycle by
        bringing AI agents into my workflow. I would love to talk about how we
        can bring your ideas to life.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
