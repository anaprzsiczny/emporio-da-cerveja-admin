import { put } from "redux-saga/effects"
import { call } from "typed-redux-saga"
import UserService from "../../../Services/userService"
import { postLoginFailure, postLoginSuccess } from "./actions"
import { decodeToken } from "react-jwt"

export function* login(action: any) {
  try {
    const response: any = yield* call(UserService.login, action.payload)
    localStorage.setItem("token", response.data.accessToken)
    const currentUserId = decodeToken(response.data.accessToken).sub
    const currentUser: any = yield* call(UserService.get, currentUserId)
    yield put(postLoginSuccess(currentUser.data))
  } catch (e) {
    yield put(postLoginFailure(true))
    localStorage.clear()
  }
}