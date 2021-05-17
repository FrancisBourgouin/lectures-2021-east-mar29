import { render } from '@testing-library/react'
import Weather from '../Weather'
import weatherData from '../../helpers/exampleResponse.json'

describe("Weather component behavior", () => {
  it("should show a message to select a city if no data provided", () => {
    const { getByText, queryByText } = render(<Weather />)

    const message = "No valid data at the moment, please select a city"

    expect(getByText(message)).toBeInTheDocument()
    expect(queryByText("Weather for:")).not.toBeInTheDocument()
  })
  it("should show a message to have good data if data bad", () => {
    const { getByText, queryByText } = render(<Weather city="Petit Poulet" />)

    const message = "City seems to be invalid, please try with another city"

    expect(getByText(message)).toBeInTheDocument()
    expect(queryByText("Weather for:")).not.toBeInTheDocument()
  })
  it("should show weather info if the data is complete", () => {
    const { queryByText, queryByTestId } = render(<Weather city="Montréal" weatherData={weatherData} />)

    const message = "No valid data at the moment, please select a city"
    const message2 = "City seems to be invalid, please try with another city"
    expect(queryByText(message)).not.toBeInTheDocument()
    expect(queryByText(message2)).not.toBeInTheDocument()

    expect(queryByText('Weather for: Montréal')).toBeInTheDocument()
    expect(queryByText('Temperature is:')).toBeInTheDocument()
    expect(queryByTestId('condition')).toBeInTheDocument()

  })
})