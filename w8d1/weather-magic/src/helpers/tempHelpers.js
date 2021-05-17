// 0K = -273.15C

export const kelvinToCelsius = temp => {
  const parsedNumber = Number(temp)
  if (parsedNumber < 0 || Number.isNaN(parsedNumber)) {
    return null
  }
  return Math.round(parsedNumber - 273.15)

}