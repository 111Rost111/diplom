import { combineReducers } from "redux";
import {
  TOGLE_DRAWER,
  LOAD_BOARDS_SUCCESS,
  CREATE_BOARD_SUCCESS,
  OPEN_CREATE_BOARD_MODAL,
  CLOSE_CREATE_BOARD_MODAL,
  SELECT_BOARD_SUCCESS
} from "../constants";

const initialState = []


export function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOARDS_SUCCESS:
      return action.payload
    case CREATE_BOARD_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const createModalState = false

export function createBoardModal(state = createModalState, action) {
  switch (action.type) {
    case OPEN_CREATE_BOARD_MODAL:
      return true
    case CLOSE_CREATE_BOARD_MODAL:
      return false
    default:
      return state
  }
}

export function selectedBoardName(state = '', action) {
  switch (action.type) {
    case SELECT_BOARD_SUCCESS:
      return action.payload.name
    default:
      return state
  }
}

export default combineReducers({
  boards,
  createBoardModal,
  selectedBoardName,
});