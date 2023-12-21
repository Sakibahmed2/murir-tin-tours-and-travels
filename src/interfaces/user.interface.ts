interface IUser {
  name: string
  password: string
  passwordChangeAt: Date
  age: number
  email: string
  photo: string
  role: 'user' | 'admin'
  userStatus: 'active' | 'inactive'
}

export { IUser }
