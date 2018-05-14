import {
  fork,
  put,
  call,
  takeEvery,
  select,
  takeLatest
} from "redux-saga/effects";

import {
  CREATE_TIKET,
  UPDATE_TIKETS,
  LOAD_BOARDS_SUCCESS,
  LOAD_NEW_TIKETS,
  UPDATE_STATUS,
  SEARCH_TIKETS,

  ON_HOLD,
  TO_DO,
  IN_PROGRESS,
  DONE,
  CODE_REVIEW,
  QAED,
  VERIFIED,
} from '../constants'


function* createTiket(data) {
  const boardName = yield select(state => state.boards.selectedBoardName)
  if (!boardName.trim()) return
  let boards = JSON.parse(localStorage.getItem("boards"));
  let tikets = null

  for (let i = 0; i < boards.length; i++) {
    if (boards[i].name === boardName) {
      boards[i].tickets[TO_DO].push(data.payload)
      tikets = boards[i].tickets
      break;
    }
  }

  localStorage.setItem("boards", JSON.stringify(boards));

  yield put({ type: LOAD_BOARDS_SUCCESS, payload: boards })
  yield put({ type: LOAD_NEW_TIKETS, payload: tikets })
}

function* updateStatus(data) {
  const { index, from, to } = data.payload
  const boardName = yield select(state => state.boards.selectedBoardName)
  let boards = JSON.parse(localStorage.getItem("boards"));
  let tikets = null

  for (let i = 0; i < boards.length; i++) {
    if (boards[i].name === boardName) {
      const tiket = boards[i].tickets[from].splice(index, 1)[0]
      boards[i].tickets[to].push(tiket)
      tikets = boards[i].tickets
      break;
    }
  }

  localStorage.setItem("boards", JSON.stringify(boards));

  yield put({ type: LOAD_BOARDS_SUCCESS, payload: boards })
  yield put({ type: LOAD_NEW_TIKETS, payload: tikets })
}

function* searchTikets(data) {
  const query = data.payload.toLowerCase()
  const boardName = yield select(state => state.boards.selectedBoardName)
  let boards = JSON.parse(localStorage.getItem("boards"));
  let tikets = null
  let filtredTikets = {}

  for (let i = 0; i < boards.length; i++) {
    if (boards[i].name === boardName) {
      tikets = boards[i].tickets
      Object.keys(tikets).map((column) => {
        filtredTikets[column] = tikets[column].filter((el) => ~el.description.toLowerCase().indexOf(query))
      })
      break;
    }
  }

  yield put({ type: LOAD_NEW_TIKETS, payload: filtredTikets })
}



export default function* documentSaga(store) {
  yield fork(takeEvery, CREATE_TIKET, createTiket);
  yield fork(takeEvery, UPDATE_STATUS, updateStatus);
  yield fork(takeEvery, SEARCH_TIKETS, searchTikets);
}
