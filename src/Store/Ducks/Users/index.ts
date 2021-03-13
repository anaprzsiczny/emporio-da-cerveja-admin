import { UserActionTypes } from "./types"

const initialState = {
  user: {},
  error: false,
  loading: false,
  success: false
}

const reducerUser = (state = initialState, action: any) => {
  switch(action.type) {
    case UserActionTypes.POST_LOGIN_REQUEST:
      return {...initialState, loading: true}
    case UserActionTypes.POST_LOGIN_SUCCESS:
      return {...initialState, user: action.payload, success: true}
    case UserActionTypes.POST_LOGIN_FAILURE:
      return {...initialState, error: true}
    default:
      return state
  }
}

export default reducerUser