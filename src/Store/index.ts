import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./Ducks/rootSaga"
import createRootReducer from "./Ducks/rootReducer"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

const store = createStore(
  createRootReducer(),
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)

export default store