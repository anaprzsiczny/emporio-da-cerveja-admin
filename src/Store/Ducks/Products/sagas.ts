import { put } from "redux-saga/effects"
import { call } from "typed-redux-saga"
import ProductService from "../../../Services/productService"
import { getProductsFailure, getProductsSuccess } from "./actions"

export function* getProducts(action: any) {
  try {
    const response: any = yield* call(ProductService.list)
    yield put(getProductsSuccess(response.data))
  } catch (e) {
    yield put(getProductsFailure(true))
  }
}