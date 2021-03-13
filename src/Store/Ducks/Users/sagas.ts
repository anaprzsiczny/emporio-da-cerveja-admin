import { put } from "redux-saga/effects"
import { call } from "typed-redux-saga"
import UserService from "../../../Services/userService"
import { deleteUserFailure, deleteUserSuccess, getUsersFailure, getUsersSuccess, postLoginFailure, postLoginSuccess, postUserFailure, postUserSuccess } from "./actions"
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

export function* total() {
  try {
    const response: any = yield* call(UserService.list)
    yield put(getUsersSuccess(response.data))
  } catch (e) {
    yield put(getUsersFailure(true))
  }
}

export function* register(action: any) {
  try {
    const response: any = yield* call(UserService.register, action.payload)
    yield put(postUserSuccess(action.payload))
  } catch (e) {
    yield put(postUserFailure(true))
  }
}

export function* deleteUser(action: any) {
  try {
    const response: any = yield* call(UserService.delete, action.payload)
    yield put(deleteUserSuccess(action.payload))
  } catch (e) {
    yield put(deleteUserFailure(true))
  }
}