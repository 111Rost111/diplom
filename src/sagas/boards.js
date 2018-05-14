import {
  fork,
  put,
  call,
  takeEvery,
  select,
  takeLatest
} from "redux-saga/effects";
import {
  CRETE_BOARD,
  CREATE_BOARD_SUCCESS,
  LOAD_BOARDS_SUCCESS,
  SELECT_BOARD_SUCCESS,
  SELECT_BOARD,
  REMOVE_BOARD,

  ON_HOLD,
  TO_DO,
  IN_PROGRESS,
  DONE,
  CODE_REVIEW,
  QAED,
  VERIFIED,

  LOAD_NEW_TIKETS
} from '../constants'


function* createBoard(action) {
  const newBoard = {
    name: action.payload,
    tickets: {
      ON_HOLD: [],
      TO_DO: [],
      IN_PROGRESS: [],
      DONE: [],
      CODE_REVIEW: [],
      QAED: [],
      VERIFIED: []
    }
  }

  let boards
  boards = JSON.parse(localStorage.getItem("boards"));
  if (boards === null) {
    boards = []
    boards.push(newBoard)
    localStorage.setItem("boards", JSON.stringify(boards));
  } else {
    boards.push(newBoard)
    localStorage.setItem("boards", JSON.stringify(boards));
  }

  yield put({ type: CREATE_BOARD_SUCCESS, payload: boards })
  yield call(selectBoard, action)
}

function* loadBoards() {
  let boards
  boards = JSON.parse(localStorage.getItem("boards"));
  if (boards === null) {
    boards = []
    localStorage.setItem("boards", JSON.stringify(boards));
  }

  yield put({ type: LOAD_BOARDS_SUCCESS, payload: boards })
  yield call(selectBoard)
}

function* selectBoard(action) {
  let board = null
  let boards = JSON.parse(localStorage.getItem("boards"));
  let selected = JSON.parse(localStorage.getItem("selected"));
  if (boards === null || !boards.length) return

  if (action) {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].name === action.payload) {
        board = boards[i]
        break;
      }
    }
  } else if (selected) {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].name === selected) {
        board = boards[i]
        break;
      }
    }
  }

  if (board === null) board = boards[0]
  localStorage.setItem("selected", JSON.stringify(board.name));

  yield put({ type: SELECT_BOARD_SUCCESS, payload: { name: board.name, tickets: board.tickets } })
  yield put({ type: LOAD_NEW_TIKETS, payload: board.tickets })
}

function* removeBoard(action) {


  let boards = JSON.parse(localStorage.getItem("boards"));
  if (boards === null) return

  let selected = JSON.parse(localStorage.getItem("selected"));
  console.log(selected)

  for (let i = 0; i < boards.length; i++) {
    if (boards[i].name === selected) {
      boards.splice(i, 1)
      break;
    }
  }
  

  // console.log(boards)

  localStorage.setItem("boards", JSON.stringify(boards));

  yield put({ type: LOAD_BOARDS_SUCCESS, payload: boards })
  yield call(selectBoard, { action: boards[0] && boards[0].name || '' })
}



export default function* boardsSaga(store) {
  yield call(loadBoards)
  yield fork(takeEvery, CRETE_BOARD, createBoard);
  yield fork(takeEvery, SELECT_BOARD, selectBoard);
  yield fork(takeEvery, REMOVE_BOARD, removeBoard);

}
