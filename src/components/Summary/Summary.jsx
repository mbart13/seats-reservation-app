import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  padding: 2rem;
`
const Heading = styled.h1`
  margin-bottom: 2.5rem;
`
const StyledList = styled.ul`
  padding: 0;
  margin-bottom: 3rem;
`

const StyledListItem = styled.li`
  font-size: 1.4rem;
`

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`

const Summary = () => {
  const seats = useSelector(state =>
    state.seats.flat().filter(seat => seat !== null && seat.selected)
  )

  return (
    <Wrapper>
      <Heading>Twoja rezerwacja przebiegła pomyślnie!</Heading>
      <h2>Wybrałeś miejsca:</h2>
      <StyledList>
        {seats.map(seat => {
          return (
            <StyledListItem key={seat.id}>
              - rząd {seat.cords.x}, miejsce {seat.cords.y} ({seat.id})
            </StyledListItem>
          )
        })}
      </StyledList>
      <StyledParagraph>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </StyledParagraph>
    </Wrapper>
  )
}

export default Summary
