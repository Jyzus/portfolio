import { Experience } from "./experience/Experience";
import { Presentation } from "./presentation/Presentation";
import { Proyects } from "./proyects/Proyects";
import { Skills } from "./skills/Skills";

export const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <Presentation />
      <Proyects />
      <Experience />
      <Skills />
    </div>
  );
};
