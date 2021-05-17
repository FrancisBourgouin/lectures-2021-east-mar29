import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { listOfPlants, waterThePlant } = props

  const parsedPlants =
    Array.isArray(listOfPlants) &&
    listOfPlants.map(plant => <PlantListItem key={plant.id} {...plant} waterThePlant={() => waterThePlant(plant.id)} />)


  return (
    <section className="PlantList">
      <header>
        <h1>I am PlantList</h1>
      </header>
      <main>
        {parsedPlants}
      </main>
    </section>
  )
}