import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../../../utils/cn";
import { IProyect } from "../../../interfaces/Proyect.interface";
import { CardTitle } from "./components/CardTitle";
import { CardDescription } from "./components/CardDescription";
import { Card } from "./components/Card";
import { CardBanner } from "./components/CardBanner";
import { Reveal } from "../../../animated/Reveal";

interface Props {
  items: IProyect[];
  className?: string;
  setProyectSelected: (item: IProyect) => void;
}

export const CardHoverEffect = ({
  items,
  className,
  setProyectSelected,
}: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        return (
          <Reveal delay={idx * 0.2} key={idx}>
            <motion.div
              key={item?.link}
              className="relative group  block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setProyectSelected(item)}
              layoutId={item.id}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle link={item.link}>{item.name}</CardTitle>
                <CardBanner src={item.banner} />
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </motion.div>
          </Reveal>
        );
      })}
    </div>
  );
};
