import { BaseButton } from '@/components/primitives/buttons'
import { BaseInput } from '@/components/primitives/inputs'

type HTMLFormProps = {
  onSubmit?: JSX.IntrinsicElements['form']['onSubmit']
}

type SigninFormProps = {} & HTMLFormProps

function SignIn({ onSubmit }: SigninFormProps) {
  return (
    <form onSubmit={onSubmit}>
      
    </form>
  )
}

export default SignIn
