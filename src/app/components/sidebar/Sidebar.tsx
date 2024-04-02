import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { GoMoon } from "react-icons/go";
import { Link, Outlet } from "react-router-dom";
import ButtonMenu from "./ButtonMenu";
import { links } from "./Links";
import { ScrollToSection } from "./ScrollToSection";
import { clsx } from "clsx";

export const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const menuVariants: Variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 44px 94%)`,
      position: "fixed",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 44px 95vh)",
      position: "fixed",
      cursor: "pointer",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div className="relative  dark:bg-gradient-to-tr dark:from-neutral-900 dark:to-neutral-800 dark:text-white">
      <Link to="/" className="flex-center-center gap-2 fixed left-8 top-6 z-50">
        <img src="/img/brand/logo-nobg.png" alt="logo" className="w-8 h-8" />
      </Link>
      <div className="fixed right-8 top-6 z-50">
        <i className="cursor-pointer" onClick={toggleDarkMode}>
          <GoMoon size={25} />
        </i>
      </div>
      {/* //TODO: Este es el menu animado */}
      <motion.nav>
        <motion.div
          initial={false}
          animate={menu ? "open" : "closed"}
          variants={menuVariants}
          className={clsx(
            "z-[60] top-0 left-0 bottom-0 w-screen md:w-72 h-screen bg-principal-500"
          )}
          onClick={() => toggleMenu()}
        >
          <ScrollToSection links={links} className="absolute left-8 top-16" />
          <ButtonMenu
            toggleMenu={toggleMenu}
            className="absolute left-8 bottom-[3.5%]"
          />
        </motion.div>

        {/* <ScrollToSection
          links={links}
          className="hidden md:block fixed bottom-6 left-8 z-[90] text-principal-500"
        /> */}
      </motion.nav>
      <main className="pt-4 md:pt-0 ">
        <Outlet />
      </main>
    </div>
  );
};
