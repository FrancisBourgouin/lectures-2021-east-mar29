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

// module.exports = { parrotBack, parrotBackToEveryone, broadcastingParrot }

