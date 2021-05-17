import { render, fireEvent } from '@testing-library/react'
import CityForm from '../CityForm'

describe("CityForm Behavior", () => {
  it("should have a specific value in the input if something is typed", () => {
    const { queryByTestId } = render(<CityForm />)

    fireEvent.change(queryByTestId('input'), { target: { value: "Montréal" } })

    expect(queryByTestId('input')).toHaveValue("Montréal")
  })
  it("should use the submit function when submitted", () => {
    const fakeOnSubmit = jest.fn()
    const { queryByTestId } = render(<CityForm onSubmit={fakeOnSubmit} />)

    fireEvent.click(queryByTestId('submit'))

    expect(fakeOnSubmit).toHaveBeenCalled()
  })
  it("should send a specific value when submitted", () => {
    const fakeOnSubmit = jest.fn()
    const { queryByTestId } = render(<CityForm onSubmit={fakeOnSubmit} />)

    fireEvent.change(queryByTestId('input'), { target: { value: "Montréal" } })

    fireEvent.click(queryByTestId('submit'))

    expect(fakeOnSubmit).toHaveBeenCalledWith('Montréal')
  })
})