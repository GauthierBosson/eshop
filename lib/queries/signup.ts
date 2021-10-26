import  { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import axios, { AxiosResponse } from 'axios'

import type { SignupInputs } from '@/types/Signup'
import type { UserType } from '@/types/User'

async function createUser(user: SignupInputs): Promise<UserType> {
  const res = await axios.post<unknown, AxiosResponse<UserType>>('/api/user/signup', user)
  return res.data
}

const useSignup = () => {
  const router = useRouter()

  return useMutation((user: SignupInputs) => createUser(user), {
    mutationKey: 'signup',
    onSuccess: () => {
      router.push('/signin?success=true')
    }
  })
}

export default useSignup
