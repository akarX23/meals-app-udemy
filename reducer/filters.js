import { CHANGE_FILTER } from "../helpers/constants";

const initialState = {
  isGlutenFree: false,
  isVegetarian: false,
  isLactoseFree: false,
};

export default (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, [payload]: !state[payload] };
    default:
      return { ...state };
  }
};
