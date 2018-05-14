import { combineReducers } from "redux";
import {
  CREATE_TIKET,
  OPEN_CREATE_TIKET_MODAL,
  CLOSE_CREATE_TIKET_MODAL,
  LOAD_NEW_TIKETS
} from "../constants";

const initialState = {};


export function tikets(state = initialState, action) {
  switch (action.type) {
    case CREATE_TIKET:
      return action.payload
    case LOAD_NEW_TIKETS:
      return action.payload
    default: 
    return state  
  }
}

export function createTiketModal(state = false, action) {
  switch (action.type) {
    case OPEN_CREATE_TIKET_MODAL:
      return true
    case CLOSE_CREATE_TIKET_MODAL:
      return false
    case CREATE_TIKET:
      return false
    default:
      return state
  }
}

export default combineReducers({
  tikets,
  createTiketModal
});