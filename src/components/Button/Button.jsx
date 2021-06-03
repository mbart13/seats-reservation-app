import styled from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #000;
  padding: 0.5rem 1.5rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s linear;
  :hover {
    background-color: #000;
    color: white;
  }
`

const Button = ({ children, handleClick, className }) => {
  return (
    <StyledButton onClick={handleClick} className={className}>
      {children}
    </StyledButton>
  )
}

export default Button
