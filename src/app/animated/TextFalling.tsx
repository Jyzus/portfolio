import { motion } from "framer-motion";

interface Props {
  text: string;
  className: string;
}

export const TextFalling = ({ text, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -30 }}
      animate={{ opacity: 100, translateY: 0 }}
      transition={{ duration: 1.2 }}
      className={className}
    >
      {text}
    </motion.div>
  );
};
