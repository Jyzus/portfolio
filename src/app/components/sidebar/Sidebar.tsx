import { motion } from "framer-motion";
import { GoMoon } from "react-icons/go";
import { MdMenu } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { links } from "./Links";
import { ScrollToSection } from "./ScrollToSection";
import { useState } from "react";
import { clsx } from "clsx";

export const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
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
      <motion.nav>
        <motion.div
          className={clsx(
            "fixed z-[90] text-white p-2 transition-all duration-300 md:hidden",
            {
              "w-screen h-screen top-0 left-0 bg-white dark:bg-neutral-900 rounded-none":
                menu,
              "rounded-full bottom-2 left-4 bg-principal-500": !menu,
            }
          )}
          onClick={() => setMenu(!menu)}
        >
          {!menu && <MdMenu size={30} />}
          {menu && <ScrollToSection links={links} />}
        </motion.div>
        <ScrollToSection
          links={links}
          className="hidden md:block fixed bottom-6 left-8 z-[90]"
        />
      </motion.nav>
      <main className="pt-4 md:pt-0 ">
        <Outlet />
      </main>
    </div>
  );
};
