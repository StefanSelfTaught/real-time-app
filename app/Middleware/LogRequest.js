'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const onFinished = require('on-finished')
const Logger = use('Logger')

class LogRequest {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    await next()

    const start = process.hrtime()
    onFinished(response.response, function() {
      const end = process.hrtime(start)
      const diff = (end[0] * 1e9 + end[1]) / 1e6 + ' ms'
      Logger.info('Request details:', {
        route: request.url(),
        method: request.method(),
        respTime: diff,
      })
    })
  }
}

module.exports = LogRequest
