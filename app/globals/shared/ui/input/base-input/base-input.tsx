import { IMaskMixin } from 'react-imask'

export interface BaseInputInterface {
  mask?: string | Date | Function | RegExp
  definitions?: {
    [key: string]: {
      mask: string
      displayChar?: string
      placeholderChar: string
    }
  }
  lazy?: boolean
  overwrite?: 'shift'
  min?: number | Date
  max?: number | Date
  onAccept?: (value: string, mask: any) => void
  onComplete?: (value: string) => void
}

const BaseInput = IMaskMixin(({ inputRef, ...props }) => (
  <input {...props} ref={inputRef as any} />
))

export default BaseInput
