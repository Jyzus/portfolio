import { Reveal } from "../../animated/Reveal";
import { TextFalling } from "../../animated/TextFalling";
import { SkillsHelper } from "../../seeds/SkillsHelper";

export const CardSkill = () => {
  return (
    <>
      {SkillsHelper.map((skill) => (
        <div className="p-4 w-full" key={skill.title}>
          <TextFalling text={skill.title} className="h3 mb-4" />
          <div className="w-full grid grid-cols-3 gap-4 justify-items-center">
            {skill.tech.map((tech, index) => (
              <Reveal key={tech} delay={index * 0.2}>
                <img
                  src={`/img/icons/${tech}.svg`}
                  alt={tech}
                  className="w-16 h-16 object-contain"
                />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
