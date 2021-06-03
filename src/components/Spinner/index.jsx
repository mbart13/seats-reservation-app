import ClipLoader from 'react-spinners/ClipLoader'
import { css } from '@emotion/react'

const override = css`
  display: block;
  margin: 3rem auto;
`

const Spinner = () => {
  return <ClipLoader css={override} color="#36D7B7" size={60}></ClipLoader>
}

export default Spinner
