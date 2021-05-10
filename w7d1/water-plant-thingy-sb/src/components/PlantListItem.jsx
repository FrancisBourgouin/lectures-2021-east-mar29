import Button from "./Button";

export default function PlantListItem(props) {

  return (
    <article>
      {!props.name && <p>No plant data!</p>}
      {props.name && <h1>{props.name}</h1>}
      {props.name && <h2>{props.type}, {props.lastWateredDate.toDateString()}</h2>}
      <Button danger={props.waterInterval > 11}>Water the plants</Button>
    </article>
  )
}