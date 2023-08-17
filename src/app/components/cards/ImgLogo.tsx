import { motion } from "framer-motion";

interface Props {
  src: string;
  top: string;
  left: string;
  rotate: string;
  delay: number;
}

export const ImgLogo = ({ src, top, left, rotate, delay }: Props) => {
  return (
    <motion.div
      className="absolute w-12 h-12  rounded-md shadow-lg -z-10"
      style={{ top, left, rotate }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, translateY: [10, 0, 10] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut",
        times: [0.5, 0.5],
        delay,
      }}
    >
      <img src={src} alt="" className="object-cover w-full h-full rounded-md" />
    </motion.div>
  );
};
