import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  className?: string;
  width: number;
  height: number;
  delay?: number;
}

export const Pop = ({ children, className, width, height, delay }: Props) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ width: 0, height: 0 }}
      animate={{ width, height }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
