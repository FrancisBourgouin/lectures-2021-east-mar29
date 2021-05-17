import { useState } from "react"

export default function CityForm(props) {
  const [formData, setFormData] = useState("")
  const { onSubmit } = props

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(formData)
  }

  const handleChange = event => {
    setFormData(event.target.value)
  }
  return (
    <section>
      <h1>City Form</h1>
      <form onSubmit={handleSubmit}>
        <input data-testid="input" type="text" name="city" value={formData} onChange={handleChange} />
        <button type="submit" data-testid="submit">Get weather!</button>
      </form>
    </section>
  )
}