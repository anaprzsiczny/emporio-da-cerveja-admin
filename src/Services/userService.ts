import { api } from "./api";

const UserService = {
  login: (request: any) => api.post("/login", request),
  list: () => api.get("/users?role=admin&role=editor"),
  delete: (id: any) => api.delete(`/users/${id}`),
  register: (request: any) => api.post("/users", request)
}

export default UserService