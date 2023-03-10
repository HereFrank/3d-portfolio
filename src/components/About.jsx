import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={"w-full xs:w-[250px]"}>
      <motion.div></motion.div>
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
        I'm a front-end developer with around of 2 years of experience making UI
        interfaces and logic in Next.js/React. I have developed front-end
        components using Typescript/Javascript, worked with Node.js, and even
        implemented web3.0 solutions to make NFTs using the Metaplex SDK and
        implemented logic for connecting with Smart Contracts in the blockchain
        of Solana. <br /> I love to learn and build efficent, scalable, and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your idea to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
