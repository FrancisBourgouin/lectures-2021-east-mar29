import PlantListItem from './PlantListItem'
// [
//   {
//     id: 1,
//     type: "Fern",
//     name: "Backwoods fern",
//     lastWateredDate: new Date('2021-05-05'),
//     waterInterval: 10
//   },
//   {
//     id: 2,
//     type: "Tree",
//     name: "Maple tree",
//     lastWateredDate: new Date('2021-04-05'),
//     waterInterval: 45
//   },
// ]

//   {
//     id: 1,
//     type: "Fern",
//     name: "Backwoods fern",
//     lastWateredDate: new Date('2021-05-05'),
//     waterInterval: 10
//   },


export default function PlantList(props) {
  const firstPlant = props.listOfPlants[0]
  const secondPlant = props.listOfPlants[1]

  const listOfPlants = [<PlantListItem {...firstPlant} />, <PlantListItem  {...secondPlant} />]
  const betterListOfPlants = props.listOfPlants.map(plant => <PlantListItem key={plant.id} {...plant} />)
  return (
    <section>
      {/* {PlantListItem({ ...firstPlant })}
      <PlantListItem
        {...secondPlant}
      /> */}

      {betterListOfPlants}
    </section>
  )
}