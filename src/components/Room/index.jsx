import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import fetchAvailableSeats from 'utils/api'
import Seat from 'components/Seat'
import LegendItem from 'components/LegendItem'
import Button from 'components/Button'
import { Wrapper, Grid, Menu, Legend, StyledHeader } from './Room.styles'
import { reservationActions } from 'store'
import { mapData } from 'utils/helpers'
import Spinner from 'components/Spinner'
import ErrorFallback from 'components/ErrorFallback'

const Room = () => {
  const dispatch = useDispatch()
  const seats = useSelector(state => state.seats)
  const [isDisabled, setIsDisabled] = useState(false)
  const history = useHistory()
  const loading = useSelector(state => state.isLoading)
  const isError = useSelector(state => state.isError)

  useEffect(() => {
    ;(async () => {
      try {
        dispatch(reservationActions.setLoading(true))
        const data = await fetchAvailableSeats()
        const mappedData = mapData(data)
        dispatch(reservationActions.loadData(mappedData))
      } catch (e) {
        dispatch(reservationActions.setError(true))
      } finally {
        dispatch(reservationActions.setLoading(false))
      }
    })()
  }, [dispatch])

  useEffect(() => {
    setIsDisabled(
      !seats.flat().filter(seat => seat !== null && seat.selected).length
    )
  }, [seats])

  if (isError) {
    return <ErrorFallback />
  }

  if (loading) {
    return <Spinner />
  }

  const handleClick = () => {
    history.push('/summary')
  }

  return (
    <Wrapper>
      {!seats.flat().filter(seat => seat !== null && seat.selected).length && (
        <StyledHeader>
          Nie znaleźliśmy miejsc spełniających te kryteria. Wybierz z listy
          poniżej.
        </StyledHeader>
      )}
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
        <Button small handleClick={handleClick} disabled={isDisabled}>
          Rezerwuj
        </Button>
      </Menu>
    </Wrapper>
  )
}

export default Room
