import { TOGGLE_FAV_MEAL } from "../helpers/constants";

export const toggleFavouriteMeal = (mealId) => {
  return {
    type: TOGGLE_FAV_MEAL,
    payload: mealId,
  };
};
