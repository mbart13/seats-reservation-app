import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button/Button'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    margin-right: 2rem;
  }

  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
  input[type='checkbox'] {
    margin: 0 1rem 0 0;
  }
`

const FormField = styled.div`
  margin-bottom: 1rem;

  ${({ invalid }) =>
    invalid &&
    css`
      input[type='number'] {
        border: 1px solid red;
      }
    `}
`

const ErrorMessage = styled.p`
  color: red;
  text-align: right;
`

const Form = () => {
  const history = useHistory()
  const [seatsQty, setSeatsQty] = useState('')
  const [adjacent, setAdjacent] = useState(false)
  const [invalid, setInvalid] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (!seatsQty) {
      setInvalid(true)
      return
    }
    history.push('/room')
  }

  useEffect(() => {
    if (seatsQty) {
      setInvalid(false)
    }
  }, [seatsQty])

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormField invalid={invalid}>
          <label htmlFor="liczba-miejsc">Liczba miejsc: </label>
          <input
            type="number"
            id="liczba-miejsc"
            value={seatsQty}
            onChange={e => setSeatsQty(Number(e.target.value))}
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
