'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Encryption = use('Encryption')
const moment = use('moment')

class Message extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (messageInstance) => {
      const encryptedText = Encryption.encrypt(messageInstance.text)
      messageInstance.text = encryptedText
    })

    this.addHook('afterFetch', async (messageInstance) => {
      messageInstance.forEach(message => {
        const decryptedText = Encryption.decrypt(message.text)
        message.text = decryptedText
      })
    })
  }

  getCreatedAt(date) {
    return moment(date).fromNow()
  }

  channel () {
    return this.belongsTo('App/Models/Channel')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Message
