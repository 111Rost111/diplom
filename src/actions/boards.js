import {
  OPEN_CREATE_BOARD_MODAL,
  CLOSE_CREATE_BOARD_MODAL,
  CRETE_BOARD,
  SELECT_BOARD,
  REMOVE_BOARD
} from '../constants'

export const openCreateBoardModal = () => ({
  type: OPEN_CREATE_BOARD_MODAL,
  payload: true
})

export const closeCreateBoardModal = () => ({
  type: CLOSE_CREATE_BOARD_MODAL,
  payload: false  
})

export const createBoard = (name) => ({
  type: CRETE_BOARD,
  payload: name
})

export const selectBoard = (name) => ({
  type: SELECT_BOARD,
  payload: name
})

export const removeBoard = (name) => ({
  type: REMOVE_BOARD,
  payload: name
})