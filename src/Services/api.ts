import axios from "axios"

const baseAPI = "http://localhost:4000/"

export const api = axios.create({
  baseURL: baseAPI
})