import { InputHTMLAttributes } from 'react'
import BaseInput from './base-input'
import { BaseInputInterface } from './base-input/base-input'

type InputProps = InputHTMLAttributes<HTMLInputElement> & BaseInputInterface

const Input = ({ ...baseInputProps }: InputProps) => {
  return (
    <>
      <BaseInput
        radix="."
        unmask={true}
        {...baseInputProps}
        className={`input ${baseInputProps.className || ''}`}
      />
    </>
  )
}

export default Input
