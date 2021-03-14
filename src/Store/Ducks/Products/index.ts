import { SubmitProductTypes } from "../../../Types/submitTypes"
import { ProductsActionTypes } from "./types"

const initialState = {
  products: [],
  errorProduct: false,
  loadingProduct: false,
  successProduct: false,
}

const reducerProduct = (state = initialState, action: any) => {
  let products: any = state.products
  switch(action.type) {
    case ProductsActionTypes.GET_PRODUCTS_REQUEST:
      return {...state, loadingProduct: true, errorProduct: false}
    case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return {...state, loadingProduct: false, successProduct: true, products: action.payload, errorProduct: false}
    case ProductsActionTypes.GET_PRODUCTS_FAILURE:
      return {...initialState, errorProduct: true}
    case ProductsActionTypes.DELETE_PRODUCT_REQUEST:
      return {...state, loadingProduct: true, errorProduct: false}
    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS:
      products.map((item: SubmitProductTypes, index: number) => {
        if(item.id === action.payload){
          products.splice(index, 1)
        }
      })
      return {... state, products: products, loadingProduct: false, successProduct: true, errorProduct: false}
    case ProductsActionTypes.DELETE_PRODUCT_FAILURE:
      return {...initialState, errorProduct: true}
    case ProductsActionTypes.POST_PRODUCT_REQUEST:
      return {...state, loadingProduct: true, errorProduct: false}
    case ProductsActionTypes.POST_PRODUCT_SUCCESS:
      products.push(action.payload)
      return {...state, products: products, successProduct: true, loadingProduct: false, errorProduct: false}
    case ProductsActionTypes.POST_PRODUCT_FAILURE:
      return {...initialState, errorProduct: true}
    default:
      return state
  }
}

export default reducerProduct