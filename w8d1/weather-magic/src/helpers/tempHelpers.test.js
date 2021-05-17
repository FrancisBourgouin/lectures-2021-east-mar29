import { kelvinToCelsius } from './tempHelpers'

describe("kelvinToCelsius function behavior", () => {
  it("should return null if temp is not a number", () => {
    const result = kelvinToCelsius("potato")
    expect(result).toBeNull()
  })
  it("should return null if temp is an invalid number", () => {
    const result = kelvinToCelsius(-9000)
    expect(result).toBeNull()
  })
  it("should return 0 if temp given is 273.15", () => {
    const result = kelvinToCelsius(273.15)
    expect(result).toBe(0)
  })
  it("should return 20 if temp given is 293.15", () => {
    const result = kelvinToCelsius(293.15)
    expect(result).toBe(20)
  })
  it("should return -273 if temp given is 0", () => {
    const result = kelvinToCelsius(0)
    expect(result).toBe(-273)
  })
})