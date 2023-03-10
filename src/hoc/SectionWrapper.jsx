import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

export const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  }
};
