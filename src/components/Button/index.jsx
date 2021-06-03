import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  color: #000;
  width: ${({ small }) => (small ? '10rem' : '100%')};
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background-color: #000;
    color: white;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: lightgrey;
      color: white;
      :hover {
        cursor: not-allowed;
        background-color: lightgrey;
      }
    `}
`

const Button = ({ children, handleClick, className, disabled, small }) => {
  return (
    <StyledButton
      small={small}
      disabled={disabled}
      onClick={handleClick}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

export default Button
