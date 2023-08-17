import { Experience } from "../views/home/Experience";
import { Presentation } from "../views/home/Presentation";
import { Proyects } from "../views/home/Proyects";
import { Skills } from "../views/home/Skills";

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
