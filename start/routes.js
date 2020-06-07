'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ response }) => {
  response.redirect('/channels')
})

Route.group(() => {
  Route.get('/myChannels', 'ChannelController.indexUserChannels').as(
    'channels.indexUserChannels'
  )
  Route.get('/channels/create', 'ChannelController.create').as(
    'channels.create'
  )
  Route.post('/channels', 'ChannelController.store').as('channels.store')
  Route.delete('/channels/:id', 'ChannelController.destroy').as(
    'channels.destroy'
  )
  Route.get('/channels/:id/edit', 'ChannelController.edit').as('channels.edit')
  Route.put('/channels/:id', 'ChannelController.update').as('channels.update')
  Route.get('/channels/:slug', 'ChannelController.show').as('channels.show')
}).middleware(['auth'])

Route.get('/channels', 'ChannelController.index').as('channels.index')

Route.group(() => {
  Route.on('/signup').render('auth.signup')
  Route.on('/login').render('auth.login')
  Route.post('signup', 'UserController.register').validator('CreateUser')
  Route.post('/login', 'UserController.login').validator('LoginUser')
}).middleware(['guest'])

Route.get('/logout', async ({ response, auth, session }) => {
  await auth.logout()
  session.flash({
    notification: { type: 'success', message: 'Logged out successfully!' },
  })
  return response.redirect('/')
}).middleware(['auth'])
