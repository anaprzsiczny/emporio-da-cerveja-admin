import { all, takeLatest } from "redux-saga/effects"
import { getProducts } from "./Products/sagas"
import { ProductsActionTypes } from "./Products/types"
import { deleteUser, login, register, total } from "./Users/sagas"
import { UserActionTypes } from "./Users/types"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserActionTypes.POST_LOGIN_REQUEST, login),
    takeLatest(UserActionTypes.GET_USERS_REQUEST, total),
    takeLatest(UserActionTypes.POST_USER_REQUEST, register),
    takeLatest(UserActionTypes.DELETE_USER_REQUEST, deleteUser),
    takeLatest(ProductsActionTypes.GET_PRODUCTS_REQUEST, getProducts)
  ])
}