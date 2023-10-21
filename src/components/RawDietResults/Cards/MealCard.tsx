import { FC } from "react";

import ResultCard from "./ResultCard";

type MealCardProps = {
  meal: string;
  ingredients: Record<string, number>;
};

const MealCard: FC<MealCardProps> = ({ meal, ingredients }) => {
  return <ResultCard title={meal} data={ingredients} />;
};

export default MealCard;
