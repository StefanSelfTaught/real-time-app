'use strict'

/*
|--------------------------------------------------------------------------
| MessageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class MessageSeeder {
  async run () {
    // const user = await Factory.model('App/Models/User').create()
    // const channel = await Factory.model('App/Models/Channel').create()
    // const message = await Factory.model('App/Models/Message').makeMany(10)

    // await channel.messages([...message])
  }
}

module.exports = MessageSeeder
