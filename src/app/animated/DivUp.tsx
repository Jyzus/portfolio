import { motion } from "framer-motion";

type Props = {
  children: JSX.Element;
  dimentions?: {
    width: number;
    height: number;
  };
};

export const DivUp = ({
  children,
  dimentions = { width: 240, height: 240 },
}: Props) => {
  const { width, height } = dimentions;
  return (
    <motion.div
      className="relative rounded-full"
      style={{ width, height }}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        duration: 3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="w-full h-full">{children}</div>
    </motion.div>
  );
};
