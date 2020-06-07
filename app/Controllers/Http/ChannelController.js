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

  async indexUserChannels({ request, response, view, auth }) {

    try {
      const loggedInUser = await auth.getUser()

      const channels = await loggedInUser.channels().fetch()

      return view.render('userChannels', {
        userChannels: channels.toJSON()
      })
    } catch (error) {
      return response.redirect('/login')
    }

  }

  async create({ request, response, view }) {

    return view.render('createChannel')

  }

  async store({ request, response, view, auth }) {

    try {
      const loggedInUser = await auth.getUser()

      await loggedInUser.channels().create(
        request.only(['name'])
      )

      return response.redirect('/myChannels')
    } catch (error) {
      return response.redirect('/login')
    }

  }

  async edit({ request, response, view, params: { id } }) {

    const channel = await Channel.find(id)

    return view.render('editChannel', {
      channelData: channel.toJSON()
    })

  }

  async update({ request, response, params: { id } }) {

    const channel = await Channel.find(id)

    const { name } = request.post()

    channel.name = name || channel.name

    await channel.save()

    return response.redirect('/myChannels')

  }

  async destroy({ request, response, view, params: { id } }) {

    const channel = await Channel.find(id)

    await channel.messages().delete()

    await channel.delete()

    return response.redirect('back')

  }
}

module.exports = ChannelController
