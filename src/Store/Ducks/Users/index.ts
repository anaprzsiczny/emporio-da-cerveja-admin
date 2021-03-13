import { SubmitUserTypes } from "../../../Types/submitTypes"
import { UserActionTypes } from "./types"

const initialState = {
  currentUser: {},
  users: [],
  error: false,
  loading: false,
  success: false,
  login: false
}

const reducerUser = (state = initialState, action: any) => {
  let users: any = state.users
  switch(action.type) {
    case UserActionTypes.USER_LOGOUT:
      return {...state, login: false}
    case UserActionTypes.POST_LOGIN_REQUEST:
      return {...initialState, loading: true}
    case UserActionTypes.POST_LOGIN_SUCCESS:
      return {...state, currentUser: action.payload, success: true, login: true, loading: false}
    case UserActionTypes.POST_LOGIN_FAILURE:
      return {...initialState, error: true}
    case UserActionTypes.GET_USERS_REQUEST:
      return {...state, loading: true}
    case UserActionTypes.GET_USERS_SUCCESS:
      return {...state, loading: false, error: false, success: true, users: action.payload}
    case UserActionTypes.GET_USERS_FAILURE:
      return {...initialState, error: true}
    case UserActionTypes.POST_USER_REQUEST:
      return {...state, loading: true}
    case UserActionTypes.POST_USER_SUCCESS:
      users.push(action.payload)
      return {...state, users: users, success: true, loading: false}
    case UserActionTypes.POST_USER_FAILURE:
      return {...initialState, error: true}
    case UserActionTypes.DELETE_USER_REQUEST:
      return {...state, loading: true}
    case UserActionTypes.DELETE_USER_SUCCESS:
      users.map((item: SubmitUserTypes, index: number) => {
        if(item.id === action.payload){
          users.splice(index, 1)
        }
      })
      return {...state, users: users, loading: false}
    case UserActionTypes.DELETE_USER_FAILURE:
      return {...initialState, error: true}
    default:
      return state
  }
}

export default reducerUser