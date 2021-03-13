import { SubmitProductTypes } from "../Types/submitTypes"
import { api } from "./api"

const ProductService = {
  list: () => {
    const token = localStorage.getItem("token")
    return api.get("/beers", {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },
  delete: (id: number) => {
    const token = localStorage.getItem("token")
    return api.delete(`/beers/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  },
  register: (request: SubmitProductTypes) => {
    const token = localStorage.getItem("token")
    return api.post("/beers", request, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }
}

export default ProductService