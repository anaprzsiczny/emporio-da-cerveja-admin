import { ProductsActionTypes } from "./types"

const initialState = {
  products: [],
  errorProduct: false,
  loadingProduct: false,
  successProduct: false,
}

const reducerProduct = (state = initialState, action: any) => {
  switch(action.type) {
    case ProductsActionTypes.GET_PRODUCTS_REQUEST:
      return {...state, loadingProduct: true}
    case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return {...state, loadingProduct: false, successProduct: true, products: action.payload}
    case ProductsActionTypes.GET_PRODUCTS_FAILURE:
      return {...initialState, errorProduct: true}
    default:
      return state
  }
}

export default reducerProduct