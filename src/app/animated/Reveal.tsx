import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, className, delay }: Props) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  const mainContorls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainContorls.start("visible");
    }
  }, [isInView, mainContorls]);

  return (
    <div ref={divRef} className={`${className} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 100, y: 0 },
        }}
        initial="hidden"
        animate={mainContorls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
