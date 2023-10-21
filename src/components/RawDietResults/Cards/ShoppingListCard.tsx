import { FC } from "react";

import ResultCard from "./ResultCard";

type ShoppingCardProps = {
  data: Record<string, number>;
};

const ShoppingCard: FC<ShoppingCardProps> = ({ data }) => {
  return <ResultCard title="Shopping List" data={data} />;
};

export default ShoppingCard;
