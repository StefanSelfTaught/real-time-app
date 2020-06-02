'use strict'

const Message = use('App/Models/Message')
const Channel = use('App/Models/Channel')

class ChatController {
  constructor ({ socket, request, auth }) {
    this.socket = socket
    this.request = request
    this.auth = auth
  }

  async onMessage (message) {

    const { username, id } = this.auth.user

    const data = {
      message,
      username,
    }

    this.socket.broadcastToAll('message', data)

    const channel = await Channel.findBy('slug', message.channel)

    await channel.messages().create({ text: message.body, user_id: id, user_username: username })
  }

  onClose () {
    console.log('Closed')
  }

  onError () {
    console.log('Error')
  }
}

module.exports = ChatController
