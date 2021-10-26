type UserType = {
  id: string,
  name: string,
  email: string,
  emailVerified: string | null,
  password: string,
  image: string | null,
  createdAt: Date,
  updatedAt: Date
}

export type { UserType }