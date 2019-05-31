import { variant } from '@xstyled/system'
import styled, { css } from '@xstyled/styled-components'

const Button = styled.button`
  ${variant({
    default: 'default',
    variants: {
      default: css`
        display: inline-block;
        font-weight: 400;
        color: white;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: primary;
        border: 1px solid primary;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      `,
      primary: css`
        display: inline-block;
        font-weight: 400;
        color: primary;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: white;
        border: 1px solid primary;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      `
    }
  })}
`
export default Button