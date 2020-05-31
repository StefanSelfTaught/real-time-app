'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Channel extends Model {
  messages () {
    return this.hasMany('App/Models/Message')
  }
}

module.exports = Channel
