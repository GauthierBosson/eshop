type HTMLInputProps = {
  type?: JSX.IntrinsicElements['input']['type']
  name?: JSX.IntrinsicElements['input']['name']
  value?: JSX.IntrinsicElements['input']['value']
}

type BaseInputProps = {
  className?: string
  label?: string
} & HTMLInputProps

function BaseInput({
  type,
  name,
  value,
  className,
  label,
  ...props
}: BaseInputProps) {
  return (
    <label>
      {label}
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        {...props}
      />
    </label>
  )
}

export default BaseInput
