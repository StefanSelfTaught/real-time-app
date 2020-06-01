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

Route.get('/channels/:slug', 'ChannelController.show').as('channels.show')
Route.get('/channels', 'ChannelController.index').as('channels.index')

Route.post('/messages', 'MessageController.store').as('message.store')

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
