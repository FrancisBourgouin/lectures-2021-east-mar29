import { useState } from 'react';

import PlantList from './components/PlantList';
import PlantForm from './components/PlantForm';

import { onePlant, anotherPlant } from './helpers/plantData'
import './App.css';



function App() {
  const bob = useState("initalValue")
  console.log(bob)
  const valueOfBobState = bob[0]
  const functiontoChangeTheValue = bob[1]


  const [plants, setPlants] = useState([onePlant, anotherPlant])
  // const specificPlant = plants.find(plant => plant.id === 1)
  // specificPlant.timesWatered += 1


  const addNewPlant = (formData) => {
    const updatedPlants = [...plants]

    const id = Math.floor(Math.random() * 100000)
    const lastWateredDate = new Date()
    const timesWatered = 1
    // getting name, type and waterInterval from the form
    const { name, type, waterInterval } = formData

    const newPlant = { id, lastWateredDate, timesWatered, name, type, waterInterval }

    setPlants([...updatedPlants, newPlant])
  }


  const waterThePlant = id => {
    const updatedPlants = [...plants] // Shallow copy of plants state
    const specificPlant = updatedPlants.find(plant => plant.id === id) // Find the specific plant
    const specificPlantIndex = updatedPlants.findIndex(plant => plant.id === id)
    const updatedPlant = { ...specificPlant } // Shallow copy of a specific plant

    updatedPlant.timesWatered++ // Add one to the timesWatered property
    updatedPlant.lastWateredDate = new Date()
    updatedPlants[specificPlantIndex] = updatedPlant

    console.log(specificPlant)
    setPlants(updatedPlants)
  }



  return (
    <div className="App">
      <header>
        <h1>
          Super Plant Watering Watcher of Destiny.
        </h1>
      </header>
      {/* <PlantList listOfPlants={listOfPlants}/> */}
      <PlantList {...{ listOfPlants: plants, waterThePlant }} />
      <button onClick={() => waterThePlant(1)}>Meee</button>
      <PlantForm addNewPlant={addNewPlant} />
    </div>
  );
}

export default App;
