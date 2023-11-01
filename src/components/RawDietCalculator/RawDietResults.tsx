import { FC } from "react";

import { MealCard, ShoppingCard } from "@components/index";

import { MEALS_PER_DAY, getRecipes, getShoppingList } from "@components/utils";
import { CalculatorInput } from "@components/types";
import { StyledResultsContainer } from "./RawDietResults.style";

type RawDietResultsProps = { input: CalculatorInput };

const RawDietResults: FC<RawDietResultsProps> = ({ input }) => {
  if (!input) {
    return null;
  }

  const weightInGrams = Number(input.weight) * 1000;
  const amountPerDay =
    weightInGrams * (Number(input.dailyWeightPercentage) / 100);
  const amountPerMeal = amountPerDay / MEALS_PER_DAY;

  const daysInTimeFrame =
    input.timeFrame === "days"
      ? Number(input.timeUnit)
      : input.timeFrame === "weeks"
      ? Number(input.timeUnit) * 7
      : Number(input.timeUnit) * 30;

  const recipes = getRecipes({ amountPerMeal });

  const mealTypesCount = Object.keys(recipes).length;
  const multiplier = Math.ceil(
    (daysInTimeFrame * MEALS_PER_DAY) / mealTypesCount
  );

  const shoppingList = getShoppingList({ recipes, multiplier });

  return (
    <StyledResultsContainer className="styledResultsContainer">
      {Object.keys(recipes).map((meal) => (
        <MealCard key={meal} meal={meal} ingredients={recipes[meal]} />
      ))}
      <ShoppingCard data={shoppingList} />
    </StyledResultsContainer>
  );
};

export default RawDietResults;
