import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInput: {
    numberOfSeats: '',
    adjacent: false,
  },
  seats: [],
}

createSlice({
  name: 'reservations',
  initialState,
})
