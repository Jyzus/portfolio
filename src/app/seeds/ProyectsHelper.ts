import { IProyect } from "../interfaces/Proyect.interface";

export const ProyectHelper: IProyect[] = [
  {
    id: "1",
    name: "Journal App",
    banner: "/img/proyects/journal/banner.PNG",
    description:
      "Este es un proyecto realizar mientras estudiaba React. Es un aplicativo web de toma de apuntes con sesión. El proyecto fue realizado con un backend as a service (BaaS), el cuál es Firebase. El frontend fue realizardo con React y Material UI",
    imgs: [
      "journal/desktop1.png",
      "journal/desktop2.png",
      "journal/desktop3.png",
      "journal/desktop4.png",
      "journal/mobile1.png",
      "journal/mobile2.png",
    ],
    techs: ["react", "bootstrap", "JS", "firebase", "npm", "github"],
  },
  {
    id: "2",
    name: "Medical Proyect",
    banner: "/img/proyects/medical/banner.png",
    description:
      "Este es un proyecto realizardo para mi universidad. El objetivo de la página es generar exámenes a partir de los temas seleccionados por el usuario, con la finalidad de preparar a los estudiantes para un examen. Originalmente se llama Medical Proyect, porque fue creado para los estudiantes de medicina, para el examen de Serum, el cual es bastante riguroso.",
    imgs: ["medical/desktop1.png", "medical/desktop2.png"],
    techs: ["figma"],
  },
  {
    id: "3",
    name: "AGANT",
    banner: "/img/proyects/agant/shot2.png",
    description:
      "Proyecto de ayuda social dictado por Google. El proyecto que se me asignó fue el de ofrecer productos online como cursos, donde las pesonas podrían interactuar. En la página abría publicidad para poder recaudar fondos, y lo recaudado sería para la ayuda de albergues de ayuda animal. Además, la página ofrece asistencia social, recomendaciones para la ayuda de animales y la posibilidad de adoptar animales poniéndose en contacto mediante la página.",
    imgs: [
      "agant/desktop1.png",
      "agant/desktop2.png",
      "agant/desktop3.png",
      "agant/desktop4.png",
      "agant/desktop5.png",
      "agant/desktop6.png",
    ],
    techs: ["figma"],
  },
  {
    id: "4",
    name: "Shop Center",
    banner: "/img/proyects/shopCenter/banner.jpg",
    link: "https://shop-center-pearl.vercel.app/",
    description:
      "Este proyecto realizado en Angular, tuvo como objetivo, realizar procesos de filtrado, filtrar items por el nombre, precio y categoría. Aunque el diseño no fue el aspecto principal, se trató posicionar los items lo mejor posible, para que tenga un aspecto intuitivo.",
    imgs: [
      "shopCenter/shot1.png",
      "shopCenter/shot2.png",
      "shopCenter/shot3.png",
    ],
    techs: ["angular", "npm", "bootstrap", "typescript"],
  },
  {
    id: "5",
    name: "Tesla Shop",
    banner: "/img/proyects/teslaShop/banner.jpg",
    link: "https://testla-shop.vercel.app/",
    description:
      "Este es un proyecto hecho en NextUI, es el clon de la tienda Tesla. El reto de este proyecto fue realizar el proceso de compra, realizar las validaciones respectivas, funcionalidades como añadir nuevos artículos y poder editarlos en el carrito de compras y otras funciones útiles para un E-commerce",
    imgs: [
      "teslaShop/shot1.png",
      "teslaShop/shot2.png",
      "teslaShop/shot3.png",
      "teslaShop/shot4.png",
      "teslaShop/shot5.png",
    ],
    techs: ["next", "pnpm", "github", "tailwind", "react", "typescript"],
  },
];
