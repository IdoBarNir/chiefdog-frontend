import { FC } from "react";

import { CalculatorInput } from "../../types/rawDietCalculator";
import {
  MEALS_PER_DAY,
  getRecipes,
  getShoppingList,
} from "../RawDietCalculator/utils";
import MealCard from "./Cards/MealCard";
import ShoppingCard from "./Cards/ShoppingListCard";

type RawDietResultsProps = { input: CalculatorInput };

const RawDietResults: FC<RawDietResultsProps> = ({ input }) => {
  if (!input) {
    return null;
  }

  const weightInGrams = Number(input.weight) * 1000;
  const amountPerDay =
    weightInGrams * (Number(input.dailyWeightPercentage) / 100);
  const amountPerMeal = amountPerDay / MEALS_PER_DAY;
  const timeMultiplier =
    input.timeFrame === "days" ? 1 : input.timeFrame === "weeks" ? 7 : 30;
  const multiplier = Number(input.timeUnit) * timeMultiplier * MEALS_PER_DAY;

  const recipes = getRecipes({ amountPerMeal });

  const shoppingList = getShoppingList({ recipes, multiplier });

  return (
    <div
      style={{
        width: "100%",
        overflowX: "scroll",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        {Object.keys(recipes).map((meal) => (
          <MealCard key={meal} meal={meal} ingredients={recipes[meal]} />
        ))}
        <ShoppingCard data={shoppingList} />
      </div>
    </div>
  );
};

export default RawDietResults;
