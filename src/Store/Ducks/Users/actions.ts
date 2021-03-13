import { action } from "typesafe-actions"
import { SubmitLoginTypes, SubmitUserTypes } from "../../../Types/submitTypes"
import { UserActionTypes } from "./types"

export const postUserRequest = (user: SubmitUserTypes) => action(UserActionTypes.POST_USER_REQUEST, user)

export const postUserSuccess = (user: SubmitUserTypes) => action(UserActionTypes.POST_USER_SUCCESS, user)

export const postUserFailure = (error: boolean) => action(UserActionTypes.POST_USER_FAILURE, error)

export const postLoginRequest = (user: SubmitLoginTypes) => action(UserActionTypes.POST_LOGIN_REQUEST, user)

export const postLoginSuccess = (user: SubmitLoginTypes) => action(UserActionTypes.POST_LOGIN_SUCCESS, user)

export const postLoginFailure = (error: boolean) => action(UserActionTypes.POST_LOGIN_FAILURE, error)

export const deleteUserRequest = (id: number) => action(UserActionTypes.DELETE_USER_REQUEST, id)

export const deleteUserSuccess = (id: number) => action(UserActionTypes.DELETE_USER_SUCCESS, id)

export const deleteUserFailure = (error: boolean) => action(UserActionTypes.DELETE_USER_FAILURE, error)

export const getUsersRequest = () => action(UserActionTypes.GET_USERS_REQUEST)

export const getUsersSuccess = (users: any) => action(UserActionTypes.GET_USERS_SUCCESS, users)

export const getUsersFailure = (error: boolean) => action(UserActionTypes.GET_USERS_FAILURE, error)

export const loadUserLogout = () => action(UserActionTypes.USER_LOGOUT)