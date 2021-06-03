import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import fetchAvailableSeats from 'utils/api'
import Seat from 'components/Seat/Seat'
import LegendItem from 'components/LegendItem/LegendItem'
import { Wrapper, Grid, Menu, Legend, StyledButton } from './Room.styles'
import { reservationActions } from 'store'

const NUMBER_OF_ROWS = 10
const NUMBER_OF_COLUMNS = 15

const grid = new Array(NUMBER_OF_ROWS)
  .fill(null)
  .map(() => new Array(NUMBER_OF_COLUMNS).fill(null))

const Room = () => {
  const dispatch = useDispatch()
  const seats = useSelector(state => state.seats)

  useEffect(() => {
    ;(async () => {
      const data = await fetchAvailableSeats()
      const mapData = () => {
        const roomGrid = { ...grid }
        data.forEach(seat => {
          roomGrid[seat.cords.x][seat.cords.y] = seat
        })
        return grid
      }

      dispatch(reservationActions.setSeats(mapData()))
      dispatch(reservationActions.applyUserChoice())
    })()
  }, [dispatch])

  if (!seats.length) {
    return <div>Loading...</div>
  }

  return (
    <Wrapper>
      <Grid>
        {seats.map(row => {
          return row.map((seat, index) => {
            if (seat == null) return <div key={index}></div>
            return (
              <Seat
                id={seat.id}
                reserved={seat.reserved}
                selected={seat.selected}
                key={seat.id}
              />
            )
          })
        })}
      </Grid>
      <Menu>
        <Legend>
          <LegendItem text="Miejsca dostępne" />
          <LegendItem text="Miejsca zarezerwowane" reserved />
          <LegendItem text="Twój wybór" selected />
        </Legend>
        <StyledButton>Rezerwuj</StyledButton>
      </Menu>
    </Wrapper>
  )
}

export default Room
