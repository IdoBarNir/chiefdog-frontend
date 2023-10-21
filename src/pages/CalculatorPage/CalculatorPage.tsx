import { FC, useState } from "react";

import RawDietCalculator from "../../components/RawDietCalculator/RawDietCalculator";
import { CalculatorInput } from "../../types/rawDietCalculator";
import RawDietResults from "../../components/RawDietResults/RawDietResults";

const CalculatorPage: FC = () => {
  const [input, setInput] = useState<CalculatorInput>(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RawDietCalculator setInput={setInput} />
      {input && <RawDietResults input={input} />}
    </div>
  );
};

export default CalculatorPage;
