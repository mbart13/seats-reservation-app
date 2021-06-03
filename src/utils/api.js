import axios from 'axios'

const baseUrl = 'http://localhost:3000/seats'

const fetchAvailableSeats = async () => {
  const { data } = await axios.get(baseUrl)
  return data
}

export default fetchAvailableSeats
