import Seat from 'components/Seat'
import styled from 'styled-components'

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  div {
    margin-right: 1rem;
  }
  :hover {
    pointer-events: none;
  }
`

const LegendItem = ({ text, reserved = false, selected = false }) => {
  return (
    <Wrapper>
      <Seat reserved={reserved} selected={selected}>
        text
      </Seat>
      <p>{text}</p>
    </Wrapper>
  )
}

export default LegendItem
