'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChannelSchema extends Schema {
  up () {
    this.create('channels', (table) => {
      table.increments()
      table.string('name', 255).notNullable().unique()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('slug').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('channels')
  }
}

module.exports = ChannelSchema
