'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Channel extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'name'
      },
      strategy: 'dbIncrement',
      disableUpdates: true
    })
  }

  messages () {
    return this.hasMany('App/Models/Message')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Channel
