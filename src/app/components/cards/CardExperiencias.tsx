import { IExperience } from "../../interfaces/Experience.interface";

export const CardExperiencias = ({
  title,
  description,
  duration,
  tech,
}: IExperience) => {
  return (
    <div className="max-w-sm h-80 bg-white text-black border-2 rounded-lg drop-shadow-md p-4 flex flex-col justify-between">
      <div className="h-full">
        <div className="flex items-center justify-between">
          <p className="h3">{title}</p>
          <span className="text-small">{duration}</span>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex items-center gap-2">
        {tech.map((i) => (
          <img
            src={`/img/icons/${i}.svg`}
            alt={i}
            className="w-6 h-6 rounded-md object-cover"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
