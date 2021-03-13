import { SubmitLoginTypes, SubmitUserTypes } from "../Types/submitTypes";
import { api } from "./api";

const UserService = {
  login: (request: SubmitLoginTypes) => api.post("/login", request),
  list: () => api.get("/users?role=admin&role=editor"),
  delete: (id: number) => api.delete(`/users/${id}`),
  register: (request: SubmitUserTypes) => api.post("/users", request),
  get: (id: number) => api.get(`/users/${id}`)
}

export default UserService