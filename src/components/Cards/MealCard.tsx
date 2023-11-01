import { FC } from "react";

import { ResultCard } from "@components/index";

type MealCardProps = {
  meal: string;
  ingredients: Record<string, number>;
};

const MealCard: FC<MealCardProps> = ({ meal, ingredients }) => {
  return <ResultCard title={meal} data={ingredients} />;
};

export default MealCard;
