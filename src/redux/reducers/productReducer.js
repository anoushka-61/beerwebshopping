import { ActionTypes } from "../Constants/action-type";

const initialState = {
  product: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      // Update the state with the new product data
      return { ...state, product: action.payload }; // Assuming action.payload contains the new product data
    default:
      return state;
  }
};
