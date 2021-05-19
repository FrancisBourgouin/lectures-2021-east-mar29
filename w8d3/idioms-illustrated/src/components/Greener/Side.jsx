export default function Side(props) {
  const { side, currentSide, onClick, literal } = props

  return (
    <section className={`${literal ? 'literally' : ''} Side ${side !== currentSide ? 'other' : ''}`} onClick={onClick}>
      <article>
        {side === 'left' && literal && <h1>This side</h1>}
        {side === 'right' && literal && <h1>The other side</h1>}
        <img src="/house.png" />

      </article>
      <article>

        {side === currentSide && <img src="/person.png" />}
      </article>
    </section>
  )
}