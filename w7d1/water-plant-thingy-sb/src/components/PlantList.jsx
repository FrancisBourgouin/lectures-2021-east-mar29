import PlantListItem from './PlantListItem'

export default function PlantList(props) {
  const { listOfPlants } = props

  const parsedPlants = listOfPlants && listOfPlants.map(plant => <PlantListItem key={plant.id} {...plant} />)
  return (
    <section>
      <h1>List of PlantListItem components</h1>
      {parsedPlants}
      {!listOfPlants && <p>No plant data!</p>}
    </section>
  )
}