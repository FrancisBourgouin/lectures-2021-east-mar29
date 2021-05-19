import { useState } from "react"
import "./Greener.scss"
import Side from "./Side"

export default function Greener(props) {
  const [side, setSide] = useState("left")
  const [literal, setLiteral] = useState(false)

  const changeSide = () => {
    setSide(side === "left" ? "right" : "left")
  }
  const beLiteral = () => setLiteral(!literal)
  return (
    <section className="Greener">
      <h1 onClick={beLiteral}>
        <span>It's always greener on the other side</span>
        {literal && <em> literally</em>}
      </h1>
      <main>
        <Side
          side={"left"}
          currentSide={side}
          onClick={changeSide}
          literal={literal}
        />
        <Side
          side={"right"}
          currentSide={side}
          onClick={changeSide}
          literal={literal}
        />
      </main>
    </section>
  )
}