import { useState } from "react";
import { ApperText } from "../../animated/ApperText";
import { Reveal } from "../../animated/Reveal";
import { CardProyect } from "../../components/cards/CardProyect";
import { ProyectHelper } from "../../seeds/ProyectsHelper";
import { AnimatePresence, motion } from "framer-motion";
import { IProyect } from "../../interfaces/Proyect.interface";

export const Proyects = () => {
  const [proyectSelected, setProyectSelected] = useState<null | IProyect>(null);
  return (
    <div
      id="proyects"
      className="homeContainer relative flex flex-col justify-evenly"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal className="border-b-4 border-principal-500">
          <h2 className="h1 sm:text-gigant text-center">
            Proyectos Desarrollados
          </h2>
        </Reveal>
        <br />
        <ApperText
          text="A continuación presentaré los proyectos que he realizardo a lo largo de mi experiencia. En ellos podrán encontrar una deacripción que les ayudará a entrar en contexto. Los trabajos en los que he participado los encontrarán en la siguiente sección."
          className="text-small md:text-body text-center"
          delay={0.01}
        />
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 h-full px-8 gap-8 mt-8`}
      >
        {ProyectHelper.map((proyect, index) => (
          <motion.div
            onClick={() => setProyectSelected(proyect)}
            key={proyect.name}
            className="cursor-pointer"
          >
            <Reveal key={proyect.name} delay={0.2 * index}>
              <CardProyect
                id={proyect.id}
                img={proyect.banner}
                title={proyect.name}
              />
            </Reveal>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {proyectSelected && (
          <motion.div
            layoutId={proyectSelected.id}
            onClick={() => setProyectSelected(null)}
            className="absolute w-full h-full bg-white"
          >
            <div className="md:w-[1000px] mx-auto px-2">
              <p className="text-gigant mt-10">{proyectSelected.name}</p>
              <p className="mt-4">{proyectSelected.description}</p>
              <div className="w-full max-h-[800px] overflow-y-auto">
                {proyectSelected.imgs.map((img) => (
                  <img
                    src={`/img/proyects/${img}`}
                    className="w-full object-cover"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
