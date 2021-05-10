import { storiesOf } from '@storybook/react'

import PlantListItem from '../components/PlantListItem'

const onePlant = {
  id: 1,
  type: "Fern",
  name: "Backwoods fern",
  lastWateredDate: new Date('2021-05-05'),
  waterInterval: 10
}

storiesOf('Plant List Item', module)
  .add('Plant data available', () => <PlantListItem {...onePlant} />)
  .add('No plant data available', () => <PlantListItem />)