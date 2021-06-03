import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    margin-right: 2rem;
  }

  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
  input[type='checkbox'] {
    margin: 0 1rem 0 0;
  }
`

export const FormField = styled.div`
  margin-bottom: 1rem;

  ${({ invalid }) =>
    invalid &&
    css`
      input[type='number'] {
        border: 1px solid red;
      }
    `}
`

export const ErrorMessage = styled.p`
  color: red;
  text-align: right;
`
