import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./Ducks/rootSaga"
import createRootReducer from "./Ducks/rootReducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, createRootReducer())

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor } 