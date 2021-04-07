// Chat server

// Client : Telnet

// Server : Node
// Create a server
// Server needs to listen
// Listen to incoming users (event connection)
// Listen to the messages of those users
// Parrot function (we want to send back the message they sent)

const net = require("net")

const paulie = net.createServer()

const listOfClients = []

const generateRandomId = () => Math.floor(Math.random() * 2000)

const parrotBack = (client, data) => {
  client.write(`🦜: ${data}`)
}

const parrotBackToEveryone = (client, data, listOfClients) => {
  for (const currentClient of listOfClients) {
    currentClient.write(`🦜: ${data}`)
  }
}
const broadcastingParrot = (client, data, listOfClients) => {
  for (const currentClient of listOfClients) {
    if (currentClient.id !== client.id) {
      currentClient.write(`🦜: ${data}`)
    }
  }
}

// On the event of listening, paulie will...
// paulie.on('listening', () => console.log(`🦜 is listening`))

// or
const handleListening = () => console.log(`🦜 is listening`)
paulie.on('listening', handleListening)

paulie.on('connection', () => console.log('STRANGER DANGER! STRANGER DANGER!'))
// or
const handleConnectionMessage = () => console.log('STRANGER DANGER! STRANGER DANGER!')
paulie.on('connection', handleConnectionMessage)

paulie.on('connection', (client) => {
  // console.log(client)
  // client.heidi = generateRandomId()
  client.id = generateRandomId()
  listOfClients.push(client)
  client.setEncoding('utf-8')
  client.write('🦜 welcomes you \n')

  client.on('data', data => console.log(data))
  client.on('data', data => broadcastingParrot(client, data, listOfClients))
})



paulie.listen(1337)
// setTimeout(() => paulie.close(), 2000)