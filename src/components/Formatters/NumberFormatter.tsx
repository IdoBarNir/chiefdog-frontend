import { FC } from "react";

type NumberFormatterProps = {
  value: number;
};

const NumberFormatter: FC<NumberFormatterProps> = ({ value }) => {
  const formattedValue = value.toFixed(2).replace(/(\.0+|(\.\d+?)0+)$/, "$2");

  return <span>{formattedValue}</span>;
};

export default NumberFormatter;
