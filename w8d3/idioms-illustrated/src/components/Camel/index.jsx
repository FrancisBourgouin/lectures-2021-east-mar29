import { useState } from 'react'
import CamelBack from './Camel'
import './Camel.scss'
import Straws from './Straws'

export default function Camel(props) {
  const [strawAmount, setStrawAmount] = useState(0)

  const addStraw = () => {
    // if(strawAmount > 10){
    //   return setStrawAmount(0)
    // }
    // setStrawAmount(strawAmount + 1)
    setStrawAmount(strawAmount > 10 ? 0 : strawAmount + 1)
  }



  return (
    <section className="Camel">
      <h1>The straw that broke the camel's back</h1>
      <main>
        <Straws strawAmount={strawAmount} />
        <CamelBack onClick={addStraw} strawAmount={strawAmount} />
      </main>
    </section>
  )
}