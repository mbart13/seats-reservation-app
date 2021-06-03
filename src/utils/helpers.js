export const findAvailableSeats = (arr, quantity, adjacent = false) => {
  arr = arr.flat().filter(seat => seat !== null && !seat.reserved)
  if (arr.length < quantity) return

  let helper = []
  if (!adjacent) {
    for (let i = 0; i < quantity; i++) {
      helper.push(arr[i])
    }
  } else {
    let i = 0

    helper.push(arr[i])
    while (helper.length < quantity && i < arr.length - 1) {
      if (
        arr[i + 1].cords.y - helper[helper.length - 1].cords.y === 1 &&
        arr[i + 1].cords.x === helper[helper.length - 1].cords.x
      ) {
        helper.push(arr[i + 1])
      } else {
        helper = []
        helper.push(arr[i + 1])
      }
      i++
    }
  }
  return helper.length < quantity ? [] : helper.map(seat => seat.id)
}

export const mapData = data => {
  const NUMBER_OF_ROWS = 10
  const NUMBER_OF_COLUMNS = 15
  const grid = new Array(NUMBER_OF_ROWS)
    .fill(null)
    .map(() => new Array(NUMBER_OF_COLUMNS).fill(null))

  data.forEach(seat => {
    grid[seat.cords.x][seat.cords.y] = seat
  })
  return grid
}
