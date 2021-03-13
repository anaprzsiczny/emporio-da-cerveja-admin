import { combineReducers } from "redux"
import reducerProduct from "./Products"
import reducerUser from "./Users"

const createRootReducer = () => combineReducers({
  user: reducerUser,
  product: reducerProduct
})

export default createRootReducer