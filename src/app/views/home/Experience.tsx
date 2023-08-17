import { ApperText } from "../../animated/ApperText";
import { Reveal } from "../../animated/Reveal";
import { CardExperiencias } from "../../components/cards/CardExperiencias";
import { ExperienceHelper } from "../../helpers/ExperienceHelper";
import { IExperience } from "../../interfaces/Experience.interface";

export const Experience = () => {
  return (
    <div id="experience" className="homeContainer flex flex-col justify-evenly">
      <div className="max-w-3xl mx-auto">
        <Reveal className="border-b-4 border-principal-500">
          <h2 className="h1 sm:text-gigant text-center">
            Experiencias laborales
          </h2>
        </Reveal>
        <br />
        <ApperText
          className="text-body text-center"
          text="He tenido la oportinidad de aportar valor en 2 proyectos diferentes. En ambos el ambiente laboral fue excelente, y en ambos, se culminó el trabajo exitosamente."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-4 px-4">
        {ExperienceHelper.map((experience: IExperience, index) => (
          <Reveal delay={index * 0.4} key={experience.title}>
            <CardExperiencias
              title={experience.title}
              description={experience.description}
              duration={experience.duration}
              tech={experience.tech}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};
