import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CalculatorPage from "../pages/CalculatorPage/CalculatorPage";

const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
    </Routes>
  );
};

export default MainRoutes;
