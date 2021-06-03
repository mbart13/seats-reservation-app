import data from './mockData'
import { findAvailableSeats } from './helpers'

describe('finding available seats feature', () => {
  it('returns first available non-adjacent seats', () => {
    const result = findAvailableSeats(data, 5, false)
    expect(result).toEqual(['s02', 's03', 's04', 's06', 's07'])
  })

  it('returns first available adjacent seats when this option is checked', () => {
    const result = findAvailableSeats(data, 4, true)
    expect(result).toEqual(['s011', 's012', 's013', 's014'])
  })

  it('returns empty array if there are no adjacent seats available', () => {
    const result = findAvailableSeats(data, 7, true)
    expect(result).toEqual([])
  })

  it('returns empty array  when input number is larger than number of seats', () => {
    const result = findAvailableSeats(data, 250, false)
    expect(result).toEqual([])
  })
})
