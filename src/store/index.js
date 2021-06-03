import { createSlice, configureStore } from '@reduxjs/toolkit'
import { findAvailableSeats } from 'utils/helpers'

const initialState = {
  userInput: {
    numberOfSeats: '',
    adjacent: false,
  },
  seats: [],
  isLoading: false,
  isError: false,
}

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    registerInput(state, action) {
      const { numberOfSeats, adjacent } = action.payload
      state.userInput = {
        numberOfSeats,
        adjacent,
      }
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    },
    setError(state, action) {
      state.isError = action.payload
    },
    loadData(state, action) {
      state.seats = action.payload
      state.isLoading = false
      const selectedSeats = findAvailableSeats(
        state.seats,
        state.userInput.numberOfSeats,
        state.userInput.adjacent
      )
      state.seats = state.seats.map(row => {
        return row.map(seat => {
          if (seat !== null && selectedSeats.includes(seat.id)) {
            return { ...seat, selected: true }
          }
          return seat
        })
      })
    },
    toggleSelection(state, action) {
      state.seats = state.seats.map(row => {
        return row.map(seat => {
          if (seat !== null && seat.id === action.payload) {
            return { ...seat, selected: !seat.selected }
          }
          return seat
        })
      })
    },
  },
})

const store = configureStore({
  reducer: reservationsSlice.reducer,
})

export const reservationActions = reservationsSlice.actions

export default store
