import { action } from "typesafe-actions"
import { SubmitProductTypes } from "../../../Types/submitTypes"
import { ProductsActionTypes } from "./types"

export const getProductsRequest = () => action(ProductsActionTypes.GET_PRODUCTS_REQUEST)

export const getProductsSuccess = (product: any) => action(ProductsActionTypes.GET_PRODUCTS_SUCCESS, product)

export const getProductsFailure = (error: boolean) => action(ProductsActionTypes.GET_PRODUCTS_FAILURE, error)

export const deleteProductRequest = (id: number) => action(ProductsActionTypes.DELETE_PRODUCT_REQUEST, id)

export const deleteProductSuccess = (id: number) => action(ProductsActionTypes.DELETE_PRODUCT_SUCCESS, id)

export const deleteProductFailure = (error: boolean) => action(ProductsActionTypes.DELETE_PRODUCT_FAILURE, error)

export const postProductRequest = (product: SubmitProductTypes) => action(ProductsActionTypes.POST_PRODUCT_REQUEST, product)

export const postProductSuccess = (product: SubmitProductTypes) => action(ProductsActionTypes.POST_PRODUCT_SUCCESS, product)

export const postProductFailure = (error: boolean) => action(ProductsActionTypes.POST_PRODUCT_FAILURE, error)