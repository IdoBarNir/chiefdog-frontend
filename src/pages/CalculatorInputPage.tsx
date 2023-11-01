import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RawDietCalculatorInput } from "@components/index";
import { CalculatorInput } from "@components/types";

type CalculatorInputPageProps = {
  input: CalculatorInput;
  setInput: Dispatch<SetStateAction<CalculatorInput>>;
};
const CalculatorInputPage: FC<CalculatorInputPageProps> = ({
  input,
  setInput,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (input) {
      navigate("/calculatorResults");
    }
  }, [input, navigate]);

  return <RawDietCalculatorInput setInput={setInput} />;
};

export default CalculatorInputPage;
