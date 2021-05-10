import { storiesOf } from '@storybook/react'

import PlantList from '../components/PlantList'

const onePlant = {
  id: 1,
  type: "Fern",
  name: "Backwoods fern",
  lastWateredDate: new Date('2021-05-05'),
  waterInterval: 10
}
const anotherPlant = {
  id: 1,
  type: "Fern",
  name: "Frontwoods fern",
  lastWateredDate: new Date('2021-05-01'),
  waterInterval: 10
}

const listOfPlants = [onePlant, anotherPlant]
const dirtyListOfPlants = [onePlant, {}, anotherPlant]
storiesOf('Plant List', module)
  .add('Plant data available', () => <PlantList listOfPlants={listOfPlants} />)
  .add('No plant data available', () => <PlantList />)
  .add('Funky data', () => <PlantList listOfPlants={dirtyListOfPlants} />)