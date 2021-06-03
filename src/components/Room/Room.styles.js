import styled from 'styled-components'

import Button from 'components/Button/Button'

export const Wrapper = styled.div`
  max-width: 69.375rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 1rem;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

export const Legend = styled.ul`
  display: flex;
  padding: 0;
`

export const StyledButton = styled(Button)`
  width: 10rem;
`
