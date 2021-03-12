import { api } from "./api"

const ProductService = {
  list: () => api.get("/beers"),
  delete: (id: any) => api.delete(`/beers/${id}`),
  register: (request: any) => api.post("/beers", request)
}

export default ProductService