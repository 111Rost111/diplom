import { fork } from "redux-saga/effects";
import ticketsSaga from "./tickets";
import boardsSaga from "./boards";

export default function* rootSaga(store) {
  yield fork(ticketsSaga, store);
  yield fork(boardsSaga, store);
}
