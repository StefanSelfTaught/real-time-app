'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.text('text').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('channel_id').unsigned().references('id').inTable('channels')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
