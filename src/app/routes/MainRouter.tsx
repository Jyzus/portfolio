import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Proyects } from "../pages/Proyects";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyects/:id" element={<Proyects />} />
    </Routes>
  );
};
