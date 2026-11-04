import { createRef, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Ball from "./canvas/Ball";
import { useInView } from "./InView";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

// drei's <View> positions each ball relative to the viewport, so the shared
// canvas must cover the whole viewport. It never receives pointer events.
const canvasStyle = {
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
};

const Tech = () => {
  const gridRef = useRef(null);
  const gridVisible = useInView(gridRef);
  const viewRefs = useMemo(() => technologies.map(() => createRef()), []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What techonologies I know? </p>
        <h2 className={styles.sectionHeadText}>My Stack.</h2>
      </motion.div>
      <div
        ref={gridRef}
        className="relative flex flex-row flex-wrap justify-center gap-10 mt-20"
      >
        {technologies.map((technology, index) => (
          <div className="flex flex-col" key={technology.name}>
            <View className="w-28 h-28" ref={viewRefs[index]}>
              <Ball icon={technology.icon} viewRef={viewRefs[index]} />
            </View>
            <p className="text-center text-secondary">{technology.name}</p>
          </div>
        ))}

        {gridVisible && (
          <Canvas
            frameloop="always"
            dpr={[1, 1.5]}
            eventSource={gridRef}
            eventPrefix="client"
            style={canvasStyle}
          >
            <View.Port />
          </Canvas>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "techs");
