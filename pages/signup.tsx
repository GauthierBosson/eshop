import type { NextPage } from "next"
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import type { SignupInputs } from '@/types/Signup'
import useSignup from '@/lib/queries/signup'

const schema = yup.object({
  name: yup.string().required('You must enter your name'),
  email: yup.string().email('Invalid email').required('You must enter you email'),
  password: yup.string().min(8, 'Your password must have at least 8 characters').required('Your must enter a password'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
}).required()

const Signup: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupInputs>({
    resolver: yupResolver(schema)
  })
  const addUser = useSignup()
  const onSubmit: SubmitHandler<SignupInputs> = data => {
    addUser.mutate(data)
  }
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} />
        <p>{errors.name?.message}</p>

        <input type="email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <input type="password" {...register('password')} />
        <p>{errors.password?.message}</p>

        <input type="password" {...register('passwordConfirm')} />
        <p>{errors.passwordConfirm?.message}</p>

        <input disabled={addUser.isLoading} type="submit" />
      </form>

      <div>
        {addUser.isSuccess ? (
          'Success'
        ) : (
          <>
            {addUser.isError ? (
              'error'
            ) : null}
          </>
        )}
      </div>
    </>
  )
}

export default Signup