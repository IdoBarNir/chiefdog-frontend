import { FC } from "react";

import { ResultCard } from "@components/index";

type ShoppingCardProps = {
  data: Record<string, number>;
};

const ShoppingCard: FC<ShoppingCardProps> = ({ data }) => {
  return <ResultCard title="Shopping List" data={data} />;
};

export default ShoppingCard;
