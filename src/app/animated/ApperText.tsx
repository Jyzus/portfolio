import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  text: string;
  className: string;
  delay?: number;
}

export const ApperText = ({ text, className, delay = 0.04 }: Props) => {


  const divRef = useRef(null)
  const isInView = useInView(divRef)
  const controlls = useAnimation()

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const children = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(()=>{
    if(isInView){
      controlls.start('visible')
    }
  }, [isInView])
  return (
    <motion.div
    ref={divRef}
      variants={container}
      initial="hidden"
      animate={controlls}
      className={`${className}`}
    >
      {words.map((word, index) => (
        <motion.span variants={children} key={index}>
          {word}
          <span> </span>
        </motion.span>
      ))}
    </motion.div>
  );
};
