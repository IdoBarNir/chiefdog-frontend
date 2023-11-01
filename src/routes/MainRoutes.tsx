import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage, CalculatorInputPage } from "@pages/index";
import CalculatorResultsPage from "@pages/CalculatorResultsPage";
import { CalculatorInput } from "@components/types";

const MainRoutes: FC = () => {
  const [calculatorInput, setCalculatorInput] = useState<CalculatorInput>(null);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/calculatorInput"
        element={
          <CalculatorInputPage
            input={calculatorInput}
            setInput={setCalculatorInput}
          />
        }
      />
      <Route
        path="/calculatorResults"
        element={<CalculatorResultsPage input={calculatorInput} />}
      />
    </Routes>
  );
};

export default MainRoutes;
