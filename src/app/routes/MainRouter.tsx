import { Route, Routes } from "react-router-dom";
import { Home } from "../views/portfolio/Home";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
