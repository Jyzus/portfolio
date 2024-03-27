import { Link } from "./Links";
import { motion } from "framer-motion";

interface Props {
  links: Link[];
  className?: string;
}

export const ScrollToSection = ({ links, className }: Props) => {
  const scroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.ul
      variants={container}
      className={className}
      initial="hidden"
      animate="visible"
    >
      {links.map((link) => (
        <motion.li key={link.title} variants={item}>
          <button
            onClick={() => scroll(link.link)}
            className="inline-block py-1 w-full h-full text-left text-sm md:text-base text-principal-500 font-bold"
          >
            <p>{link.title}</p>
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
};
