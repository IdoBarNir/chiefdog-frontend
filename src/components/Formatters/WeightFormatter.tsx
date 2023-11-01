import { FC } from "react";

import { NumberFormatter } from "@components/index";

type WeightFormatterProps = {
  value: number;
};

const WeightFormatter: FC<WeightFormatterProps> = ({ value }) => {
  const { formattedValue, unit } =
    value >= 1000
      ? { formattedValue: value / 1000, unit: "Kg" }
      : { formattedValue: value, unit: "grams" };

  return (
    <span>
      <NumberFormatter value={formattedValue} /> {unit}
    </span>
  );
};

export default WeightFormatter;
