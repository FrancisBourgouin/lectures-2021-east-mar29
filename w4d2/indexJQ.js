const generateBoxShadowString = (cssParams) => {
  const { offseth, offsetv, blur, spread, color, inset } = cssParams
  return `${offseth} ${offsetv} ${blur} ${spread} ${color} ${inset}`
}


// jQuery syntax
// $(target).action(value)


const fetchBoxShadowFormValues = () => {
  const buffer = {}
  const inputs = $('#box-shadow-inputs input')
  for (const input of inputs) {
    const key = input.id
    const value = input.value

    buffer[key] = value
  }
  return buffer
}

const createBoxShadowParagraph = (value) => {
  $('.preview p').remove() // Removes all of the paragraphs from the div with the class preview

  const paragraph = $('<p>') // Create a paragraph
  paragraph.text('box-shadow: ' + value) //Add text to newly created paragraph


  $('.preview').append(paragraph) // Add the paragraph to the div with the class preview
}

const fetchAndShowBoxShadowValues = () => {
  const values = fetchBoxShadowFormValues()
  const string = generateBoxShadowString(values)

  $(".box").css('box-shadow', string)
  createBoxShadowParagraph(string)
}

const assignEventListenersToInputs = () => {
  $('form input').on('change', fetchAndShowBoxShadowValues)
}

$(document).ready(() => {
  assignEventListenersToInputs()


})
