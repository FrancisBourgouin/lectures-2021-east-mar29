import Button from './Button'

// {
//   id: 1,
//   type: "Fern",
//   name: "Backwoods fern",
//   lastWateredDate: new Date('2021-05-05'),
//   waterInterval: 10
// }

export default function PlantListItem(props) {
  const parsedDate = props.lastWateredDate && props.lastWateredDate.toDateString()

  return (
    <article>
      <h1>{props.name}</h1>
      <h2>{props.type}, last watered on: {parsedDate}</h2>
      {/* <Button text="water the plant" /> */}
      {Button({ text: "water the plant" })}
    </article>
  )
}