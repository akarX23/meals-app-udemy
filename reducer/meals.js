import { MEALS } from "../data/dummy-data";
import { ALTER_FILTERED_MEALS, TOGGLE_FAV_MEAL } from "../helpers/constants";

const initialState = {
  all_meals: MEALS,
  fav_meals: [],
  filteredMeals: MEALS,
};

const getMealById = (id) => MEALS.find((meal) => meal.id === id);

export default (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case TOGGLE_FAV_MEAL:
      if (state.fav_meals.find((meal) => meal.id === payload)) {
        let newFavMeals = [
          ...state.fav_meals.filter((meal) => meal.id !== payload),
        ];

        return {
          ...state,
          fav_meals: [...newFavMeals],
        };
      } else
        return {
          ...state,
          fav_meals: [...state.fav_meals, getMealById(payload)],
        };
    case ALTER_FILTERED_MEALS:
      return { ...state, filteredMeals: [...payload] };
    default:
      return { ...state };
  }
};
