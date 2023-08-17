import { Routes, Route } from "react-router-dom";
import { Sidebar } from "../app/components/sidebar/Sidebar";
import { MainRouter } from "../app/routes/MainRouter";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/*" element={<MainRouter />} />
      </Route>
    </Routes>
  );
};
