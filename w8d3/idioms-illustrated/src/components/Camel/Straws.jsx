export default function Straws(props) {
  const { strawAmount } = props

  let straws = []
  for (let i = 0; i < strawAmount; i++) {
    straws.push(<div className="straw"></div>)
  }
  return (
    <section className="Straws">
      {straws}
    </section>
  )
}