'use strict'

const Message = use('App/Models/Message')
const Channel = use('App/Models/Channel')
const Ws = use('Ws')

class ChatController {
  constructor({ socket, request, auth: { user: { username, id } } }) {
    this.socket = socket
    this.request = request
    this.username = username
    this.id = id
  }

  async onConnected () {
    const topic = Ws.getChannel('chat').topic('otool')

    console.log(topic)
  }

  async onMessage(message) {
    const channel = await Channel.findBy('slug', message.channel)

    const messageSent = await channel
      .messages()
      .create({
        text: message.body,
        user_id: this.id,
        user_username: this.username
      })

    const data = {
      message,
      username: this.username,
      deliveredAt: messageSent.toJSON().created_at
    }
    
    this.socket.broadcastToAll('message', data)
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
