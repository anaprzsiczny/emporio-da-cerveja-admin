import { put } from "redux-saga/effects"
import { call } from "typed-redux-saga"
import ProductService from "../../../Services/productService"
import { deleteProductSuccess, getProductsFailure, getProductsSuccess, postProductFailure, postProductSuccess } from "./actions"

export function* getProducts() {
  try {
    const response: any = yield* call(ProductService.list)
    yield put(getProductsSuccess(response.data))
  } catch (e) {
    yield put(getProductsFailure(true))
  }
}

export function* deleteProducts(action: any) {
  try {
    const response: any = yield* call(ProductService.delete, action.payload)
    yield put(deleteProductSuccess(action.payload))
  } catch (e) {
    yield put(getProductsFailure(true))
  }
}

export function* registerProducts(action: any) {
  try {
    const response: any = yield* call(ProductService.register, action.payload)
    yield put(postProductSuccess(action.payload))
  } catch (e) {
    yield put(postProductFailure(true))
  }
}