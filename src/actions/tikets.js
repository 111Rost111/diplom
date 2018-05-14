import {
  OPEN_CREATE_TIKET_MODAL,
  CLOSE_CREATE_TIKET_MODAL,
  CREATE_TIKET,
  UPDATE_STATUS,
  SEARCH_TIKETS
} from '../constants'

export const openCreateTiketModal = () => ({
  type: OPEN_CREATE_TIKET_MODAL,
  payload: true
})

export const closeCreateTiketModal = () => ({
  type: CLOSE_CREATE_TIKET_MODAL,
  payload: false
})

export const createTiket = (data) => ({
  type: CREATE_TIKET,
  payload: data
})

export const updateStatus = (data) => ({
  type: UPDATE_STATUS,
  payload: data
})

export const searchTikets = (data) => ({
  type: SEARCH_TIKETS,
  payload: data
})