import { IProyect } from "../interfaces/Proyect.interface";

export const ProyectHelper: IProyect[] = [
  {
    id: "1",
    name: "Journal App",
    banner: "/img/proyects/journal-banner.PNG",
    description:
      "Este es un proyecto realizar mientras estudiaba React. El proyecto consiste en realizar una aplicativo web de toma de apuntes con sesión. El proyecto fue realizado con un backend as a service (BaaS), el cuál es Firebase. El frontend fue realizardo con React y Material UI",
    imgs: [
      "journal-desktop1.png",
      "journal-desktop2.png",
      "journal-desktop3.png",
      "journal-desktop4.png",
      "journal-mobile1.png",
      "journal-mobile2.png",
    ],
    techs: ["react", "bootstrap", "JS", "firebase"],
  },
  {
    id: "2",
    name: "Medical Proyect",
    banner: "/img/proyects/medical-banner.png",
    description:
      "Este es un proyecto realizardo para mi universidad. El objetivo de la página es generar exámenes a partir de los temas seleccionados por el usuario, con la finalidad de preparar a los estudiantes para un examen. Originalmente se llama Medical Proyect, porque fue creado para los estudiantes de medicina, para el examen de Serum, el cual es bastante riguroso.",
    imgs: ["medical-desktop1.png", "medical-desktop2.png"],
    techs: ["figma"],
  },
  {
    id: "3",
    name: "AGANT",
    banner: "/img/proyects/agant-shot2.png",
    description:
      "Proyecto de ayuda social dictado por Google. El proyecto que se me asignó fue el de ofrecer productos online como cursos, donde las pesonas podrían interactuar. En la página abría publicidad para poder recaudar fondos, y lo recaudado sería para la ayuda de albergues de ayuda animal. Además, la página ofrece asistencia social, recomendaciones para la ayuda de animales y la posibilidad de adoptar animales poniéndose en contacto mediante la página.",
    imgs: [
      "agant-desktop1.png",
      "agant-desktop2.png",
      "agant-desktop3.png",
      "agant-desktop4.png",
      "agant-desktop5.png",
      "agant-desktop6.png",
    ],
    techs: ["figma"],
  },
  {
    id: "4",
    name: "Shop Center",
    banner: "https://api.pikwy.com/web/660ae168d10cd6472b22d33c.jpg",
    link: "https://shop-center-pearl.vercel.app/",
    description:
      "Es el portafolio que está visualizando actualmente, fue desarrollado con las finalidad de mostrar las habilidades que he adquirido, y de esta manera poder publicitarme a las empresas que requiran de mis conocimientos.",
    imgs: [
      "portfolio-desktop1.png",
      "portfolio-desktop2.png",
      "portfolio-desktop3.png",
      "portfolio-desktop4.png",
      "portfolio-desktop5.png",
    ],
    techs: ["angular"],
  },
  {
    id: "5",
    name: "Tesla Shop",
    banner: "https://api.pikwy.com/web/660ae1eff903dd0b946f4c09.jpg",
    link: "https://testla-shop.vercel.app/",
    description: "Este es un proyecto hecho a base de NextUI",
    imgs: [
      "portfolio-desktop1.png",
      "portfolio-desktop2.png",
      "portfolio-desktop3.png",
      "portfolio-desktop4.png",
      "portfolio-desktop5.png",
    ],
    techs: ["next"],
  },
];
