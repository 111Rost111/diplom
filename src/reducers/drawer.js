import { combineReducers } from "redux";
import { TOGLE_DRAWER } from "../constants";

const initialState = false


export function drawer(state = initialState, action) {
  switch (action.type) {
    case TOGLE_DRAWER:
      return !state
    default:
      return state
  }
}

export default combineReducers({
  drawer
});