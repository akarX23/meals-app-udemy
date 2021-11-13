import { ALTER_FILTERED_MEALS, CHANGE_FILTER } from "../helpers/constants";

export const toggleFilterSettings = (key) => {
  return {
    type: CHANGE_FILTER,
    payload: key,
  };
};

export const changeFilteredMeals = (newFilteredMeals) => ({
  type: ALTER_FILTERED_MEALS,
  payload: newFilteredMeals,
});
