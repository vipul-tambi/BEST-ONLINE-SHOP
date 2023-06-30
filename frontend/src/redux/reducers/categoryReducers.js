import * as actionsTypes from "../constants/categoryConstants";

export const getCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case actionsTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: action.payload,
      };

    case actionsTypes.SAVE_ATTR:
      return {
        ...state,
        categories: action.payload,
      };

    case actionsTypes.INSERT_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    case actionsTypes.DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
