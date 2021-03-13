import { all, takeLatest } from "redux-saga/effects"
import { login } from "./Users/sagas"
import { UserActionTypes } from "./Users/types"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserActionTypes.POST_LOGIN_REQUEST, login)
  ])
}