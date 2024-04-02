import { ApperText } from "../../../animated/ApperText";
import { Reveal } from "../../../animated/Reveal";
import { CardSkill } from "../../../components/cards/CardSkill";

export const Skills = () => {
  return (
    <div className="homeContainer flex flex-col justify-evenly" id="skills">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="h1 sm:text-gigant text-center">Habilidades</h2>
        </Reveal>
        <br />
        <ApperText
          text="En mi trayectoria profesional, he cultivado una sólida comprensión y habilidad práctica en una variedad de tecnologías relevantes para mi campo. Acontinuación podrán ver cuáles son:"
          className="text-small md:text-body text-center"
          delay={0.01}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[800px] md:mx-auto content-center">
        <CardSkill />
      </div>
    </div>
  );
};
