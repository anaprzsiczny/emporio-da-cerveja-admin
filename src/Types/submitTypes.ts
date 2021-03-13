export interface SubmitLoginTypes {
  email: string,
  password: string
}

export interface SubmitProductTypes {
  title: string,
  price: string,
  description: string,
  image: string
}

export interface SubmitUserTypes {
  name: string,
  email: string,
  password?: string,
  role: string
}