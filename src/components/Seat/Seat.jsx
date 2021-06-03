import styled, { css } from 'styled-components'

const StyledSeat = styled.div`
  height: 3rem;
  width: 3rem;
  border: 1px solid #000;

  :hover {
    cursor: pointer;
  }

  ${({ reserved }) =>
    reserved &&
    css`
      background-color: #474747;
    `}

  ${({ selected }) =>
    selected &&
    css`
      background-color: #ff8a05;
    `}
`

const Seat = ({ reserved, selected }) => {
  return <StyledSeat reserved={reserved} selected={selected}></StyledSeat>
}

export default Seat
