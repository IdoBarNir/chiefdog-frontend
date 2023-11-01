import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RawDietResults } from "@components/index";
import { CalculatorInput } from "@components/types";

type CalculatorResultsPageProps = { input: CalculatorInput };

const CalculatorResultsPage: FC<CalculatorResultsPageProps> = ({ input }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!input) {
      navigate("/calculatorInput");
    }
  }, [input, navigate]);

  return <RawDietResults input={input} />;
};

export default CalculatorResultsPage;
