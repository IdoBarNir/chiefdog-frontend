import { Ingredient } from "@components/types";

export const isNumeric = /^\d*\.?\d*$/;

export const MEALS_PER_DAY = 2;

export const recipeConfig: {
  [meal: string]: {
    [ingredient: string]: string;
  };
} = {
  Beef: {
    Beef: "51.3%",
    Fish: "20%",
    Liver: "10%",
    FruitAndVeg: "10%",
    Bonemeal: "1.6%",
    HempseedOil: "0.54%",
    Wheatgrass: "0.3%",
    Kelp: "0.1%",
  },
  Turkey: {
    Turkey: "80.3%",
    ChickenLiver: "10%",
    FruitAndVeg: "8.5%",
    Bonemeal: "1%",
    Wheatgrass: "0.4%",
    SalmonOil: "0.4%",
    Kelp: "0.1%",
  },
};

export const getRecipes = ({ amountPerMeal }: { amountPerMeal: number }) => {
  const recipes: { [key: string]: Ingredient } = {};

  Object.keys(recipeConfig).forEach((meal) => {
    const ingredientsResult: Ingredient = {};

    for (const ingredient in recipeConfig[meal]) {
      const percentage = parseFloat(recipeConfig[meal][ingredient]) / 100;
      ingredientsResult[ingredient] = amountPerMeal * percentage;
    }

    recipes[meal] = ingredientsResult;
  });

  return recipes;
};

export const getShoppingList = ({
  recipes,
  multiplier,
}: {
  recipes: { [key: string]: Ingredient };
  multiplier: number;
}): Ingredient => {
  const shoppingList: Ingredient = {};

  if (!isFinite(multiplier) || multiplier <= 0) {
    console.error("Invalid or non-positive multiplier.");
    return shoppingList;
  }

  for (const meal in recipes) {
    for (const ingredient in recipes[meal]) {
      const totalAmountForTimeFrame = recipes[meal][ingredient] * multiplier;

      if (!isFinite(totalAmountForTimeFrame)) {
        console.error(
          `Invalid amount for ingredient '${ingredient}' in meal '${meal}'`
        );
        continue;
      }

      if (shoppingList[ingredient]) {
        shoppingList[ingredient] += totalAmountForTimeFrame;
      } else {
        shoppingList[ingredient] = totalAmountForTimeFrame;
      }
    }
  }

  return shoppingList;
};
