import { motion } from "framer-motion";

type Props = {
  img: string;
  title: string;
  id: string;
};

export const CardProyect = ({ img, title, id }: Props) => {
  return (
    <motion.div layoutId={id} className="w-full m-auto h-64 md:h-72 rounded-md">
      <img
        src={img}
        alt={img}
        className="w-full h-52 object-cover object-center rounded-t-md"
      />
      <div className="h-10 w-full rounded-b-md bg-white flex items-center px-4">
        <p className="h4">{title}</p>
      </div>
    </motion.div>
  );
};
