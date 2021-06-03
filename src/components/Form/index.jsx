import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { reservationActions } from 'store'
import { Wrapper, FormField, ErrorMessage } from './Form.styles'
import Button from 'components/Button'

const Form = () => {
  const history = useHistory()
  const [numberOfSeats, setNumberOfSeats] = useState('')
  const [adjacent, setAdjacent] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (!numberOfSeats) {
      setInvalid(true)
      return
    }
    dispatch(reservationActions.registerInput({ numberOfSeats, adjacent }))
    history.push('/room')
  }

  useEffect(() => {
    if (numberOfSeats) {
      setInvalid(false)
    }
  }, [numberOfSeats])

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormField invalid={invalid}>
          <label htmlFor="liczba-miejsc">Liczba miejsc: </label>
          <input
            type="number"
            id="liczba-miejsc"
            value={numberOfSeats}
            onChange={e => setNumberOfSeats(Number(e.target.value))}
          />
          {invalid && <ErrorMessage>proszę wpisać liczbę miejsc</ErrorMessage>}
        </FormField>
        <FormField>
          <input
            id="obok siebie"
            type="checkbox"
            checked={adjacent}
            onChange={e => setAdjacent(e.target.checked)}
          />
          <label htmlFor="obok siebie">Czy miejsca mają być obok siebie?</label>
        </FormField>
        <Button>Wybierz miejsca</Button>
      </form>
    </Wrapper>
  )
}

export default Form
