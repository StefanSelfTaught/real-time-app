'use strict'

const Message = use('App/Models/Message')
const Channel = use('App/Models/Channel')

class ChatController {
  constructor({ socket, request, auth: { user: { username, id } } }) {
    this.socket = socket
    this.request = request
    this.auth = auth
    this.username = username
    this.id = id
  }

  async onMessage(message) {
    const data = {
      message,
      username: this.username
    }

    this.socket.broadcastToAll('message', data)

    const channel = await Channel.findBy('slug', message.channel)

    await channel
      .messages()
      .create({
        text: message.body,
        user_id: this.id,
        user_username: this.username
      })
  }

  onTyping() {
    this.socket.broadcast('typing', this.username)
  }

  onStopTyping() {
    this.socket.broadcast('stopTyping', this.username.replace(/\s/g, ''))
  }

  onClose() {
    console.log('Closed')
  }

  onError() {
    console.log('Error')
  }
}

module.exports = ChatController
