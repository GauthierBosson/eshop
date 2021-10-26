type SignupInputs = {
  name: string,
  email: string,
  password: string,
  passwordConfirm?: string
}

type SignupRequestBody = {
  body: {
    name: string,
    email: string,
    password: string,
  }
}

export type { SignupInputs, SignupRequestBody }