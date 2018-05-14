import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerReducer } from "react-router-redux";
import reducers from "../reducers";
import rootSaga from "../sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const reducer = combineReducers({
      ...reducers,
      router: routerReducer
    }),
    saga = createSagaMiddleware(),
    store = createStore(
      reducer,
      composeEnhancers(
        applyMiddleware(saga),
      )
    );
  saga.run(rootSaga, store);

  return {
    ...store,
  };
}
