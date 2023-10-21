export type CalculatorInput = null | {
  weight: string;
  dailyWeightPercentage: string;
  timeUnit: string;
  timeFrame: TimeFrame;
};

export type TimeFrame = "days" | "weeks" | "months";

export type Ingredient = {
  [key: string]: number;
};

export type RecipeConfigType = {
  Beef: Ingredient;
  Turkey: Ingredient;
};
