import { combineReducers } from "redux"
import reducerUser from "./Users"

const createRootReducer = () => combineReducers({
  user: reducerUser
})

export default createRootReducer