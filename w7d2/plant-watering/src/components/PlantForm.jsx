// {
//   id: 1,
//   type: "Fern",
//   name: "Backwoods fern",
//   lastWateredDate: new Date('2021-05-05'),
//   waterInterval: 10,
//   timesWatered: 5
// }
import { useState } from 'react'

export default function PlantForm(props) {
  // const [name, setName] = useState("Coffee Arabica")
  // const [type, setType] = useState("Tree")
  // const [waterInterval, setWaterInterval] = useState("15")

  const [formData, setFormData] = useState({
    "name": "",
    "type": "",
    "waterInterval": "",
  })

  const handleChange = event => {
    const { value, name } = event.target
    const newFormData = { ...formData }
    newFormData[name] = value
    setFormData(newFormData)
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewPlant(formData)
    setFormData({
      "name": "",
      "type": "",
      "waterInterval": "",
    })
  }

  // const updateName = event => {
  //   setName(event.target.value)
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h1>I am PlantForm</h1>
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="waterInterval"
        value={formData.waterInterval}
        onChange={handleChange}
        placeholder="waterInterval"
      />
      <button type="submit">Add new plant</button>
    </form>
  )
}