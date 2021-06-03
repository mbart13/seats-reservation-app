import styled, { css } from 'styled-components'
import { useDispatch } from 'react-redux'

import { reservationActions } from 'store'

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
      pointer-events: none;
    `}

  ${({ selected }) =>
    selected &&
    css`
      background-color: #ff8a05;
    `}
`

const Seat = ({ id, reserved, selected }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(reservationActions.toggleSelection(id))
  }
  return (
    <StyledSeat
      onClick={handleClick}
      reserved={reserved}
      selected={selected}
    ></StyledSeat>
  )
}

export default Seat
