import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ApperText } from "../../../animated/ApperText";
import { Reveal } from "../../../animated/Reveal";
import { IProyect } from "../../../interfaces/Proyect.interface";
import Container from "../../../layouts/Container";
import { ProyectHelper } from "../../../seeds/ProyectsHelper";
import { CardHoverEffect } from "./CardHoverEffect";

export const Proyects = () => {
  const [proyectSelected, setProyectSelected] = useState<null | IProyect>(null);
  const openModal = (proyect: IProyect) => {
    document.body.classList.add("overflow-hidden");
    setProyectSelected(proyect);
  };
  const closeModal = () => {
    document.body.classList.remove("overflow-hidden");
    setProyectSelected(null);
  };
  return (
    <Container id="proyects" className="relative flex flex-col justify-evenly">
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
      <div>
        <CardHoverEffect items={ProyectHelper} setProyectSelected={openModal} />
      </div>
      <AnimatePresence>
        {proyectSelected && (
          <motion.div
            layoutId={proyectSelected.id}
            className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen z-[60] bg-[#000000aa]"
            onClick={closeModal}
          >
            <div className="container max-h-[90vh] overflow-auto bg-white rounded-lg p-4 text-black mx-auto">
              <p className="text-gigant mt-10">{proyectSelected.name}</p>
              <p className="mt-4 font-medium">{proyectSelected.description}</p>
              <div className="">
                {proyectSelected.imgs.map((img) => (
                  <img
                    src={`/img/proyects/${img}`}
                    className="w-full object-cover"
                    key={img}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
