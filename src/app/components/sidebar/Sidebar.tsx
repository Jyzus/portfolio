import { motion } from "framer-motion";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { Pop } from "../../animated/Pop";
import { ContactHelper } from "../../seeds/ContactHelper";
import { Links } from "./Links";
import { ScrollToSection } from "./ScrollToSection";
// import { ReactDOM } from "react";

export const Sidebar = () => {
  const [navbar, setNavbar] = useState(false);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <nav
        className={`${
          navbar ? "h-screen py-5" : "h-16 py-3"
        } w-full md:w-48 fixed left-0 md:h-screen flex flex-col items-center justify-between md:py-5 bg-negativo text-white transition-all ease-in-out duration-300 overflow-hidden z-20`}
      >
        <div className="flex-center-between md:flex-col gap-4 w-full px-12 md:px-4">
          <Link to="/" className="flex-center-center gap-2">
            <img
              src="/img/brand/logo-nobg.png"
              alt="logo"
              className="w-8 h-8"
            />
            <span className={`font-bold text-xl duration-200 font-raleway`}>
              Jyzus
            </span>
          </Link>
          <div className={`flex-center-center gap-4 text-lg duration-200`}>
            <button
              className={`${
                navbar ? "rotate-90 bg-principal-500" : "rotate-0"
              }  md:hidden right-4 rounded-full p-3 text-xl flex-center-center font-black duration-150`}
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              <BiMenu />
            </button>
          </div>
        </div>
        <motion.ul
          className="text-lg text-right w-full text-white"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {Links().map((i) => (
            <motion.li
              key={i.link}
              className=" w-full mb-4 group hover:bg-principal-500 duration-100"
              variants={item}
              onClick={() => setNavbar(false)}
            >
              <ScrollToSection link={i.link} title={i.title} />
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex-center-center gap-8">
          {ContactHelper.map((contact) => (
            <Pop width={32} height={32} key={contact.link}>
              <a href={contact.link} target="_blank" className="w-full">
                <img
                  src={contact.icon}
                  alt={contact.icon}
                  className="w-full object-cover rounded-md"
                />
              </a>
            </Pop>
          ))}
        </div>
      </nav>
      <main className="pt-4 md:pt-0 md:ml-48">
        <Outlet />
      </main>
    </>
  );
};
