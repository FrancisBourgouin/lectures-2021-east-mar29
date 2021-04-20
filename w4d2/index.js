const generateBoxShadowString = (cssParams) => {
  const { offseth, offsetv, blur, spread, color, inset } = cssParams
  return `${offseth} ${offsetv} ${blur} ${spread} ${color} ${inset}`
}


// const generateBoxShadowString = (offseth, offsetv, blur, spread, color, inset) => {
//   return `box-shadow: ${offseth} ${offsetv} ${blur} ${spread} ${color} ${inset}`
// }


const fetchBoxShadowFormValues = () => {
  const buffer = {}
  const form = document.getElementById('box-shadow-inputs')
  for (const input of form.getElementsByTagName('input')) {
    const key = input.id
    const value = input.value

    buffer[key] = value
  }

  return buffer
}

const createBoxShadowParagraph = (value) => {
  const paragraph = document.createElement('p')

  const text = document.createTextNode('box-shadow: ' + value)

  paragraph.appendChild(text)

  const target = document.getElementsByClassName('preview')[0]

  for (const pTag of target.getElementsByTagName('p')) {
    pTag.remove()
  }


  target.appendChild(paragraph)
}

const fetchAndShowBoxShadowValues = () => {
  const values = fetchBoxShadowFormValues()
  const string = generateBoxShadowString(values)
  document.getElementsByClassName('box')[0].style.boxShadow = string
  console.log(string)
  createBoxShadowParagraph(string)
}


const assignEventListenersToInputs = () => {
  const form = document.getElementById('box-shadow-inputs')
  for (const input of form.getElementsByTagName('input')) {
    input.addEventListener('keyup', fetchAndShowBoxShadowValues)
  }
}



assignEventListenersToInputs()
const cssParams = fetchBoxShadowFormValues()
const boxShadowString = generateBoxShadowString(cssParams)
console.log(boxShadowString)