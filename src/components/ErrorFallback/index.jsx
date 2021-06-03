import styled from 'styled-components'

const StyledDiv = styled.div`
  font-size: 1.4rem;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  font-weight: bold;
`

const ErrorFallback = () => {
  return (
    <StyledDiv>
      <p>Coś poszło nie tak. Proszę spróbować ponownie</p>
    </StyledDiv>
  )
}

export default ErrorFallback
