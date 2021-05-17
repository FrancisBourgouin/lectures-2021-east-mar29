export default function PlantListItem(props) {
  const { name, type, lastWateredDate, timesWatered, waterThePlant } = props
  const parsedDate = lastWateredDate && lastWateredDate.toDateString()
  return (
    <article>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <p>last watered : {parsedDate}</p>
      <p>Watered {timesWatered} times</p>
      <button onClick={waterThePlant}>Water!</button>
    </article>
  )
}