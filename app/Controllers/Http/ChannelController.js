'use strict'

const Channel = use('App/Models/Channel')
const Message = use('App/Models/Message')

class ChannelController {
  async index({ request, response, view }) {
    const channels = await Channel.all()

    return view.render('channels', {
      channels: channels.toJSON()
    })
  }

  async show({ request, view, params: { slug } }) {
    const channel = await Channel.findByOrFail('slug', slug)
    const channels = await Channel.all()

    await channel.loadMany({
      messages: (builder) => builder.where('channel_id', channel.id),
    })

    const messages = channel.getRelated('messages')

    const jsonMessages = messages.toJSON()

    return view.render('channel', {
      channelData: channel.toJSON(),
      messages: jsonMessages,
      channels: channels.toJSON()
    })
  }
}

module.exports = ChannelController
