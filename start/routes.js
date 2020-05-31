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

Route.on('/').render('welcome')

Route.on('/chanel-1').render('channel-1')
Route.on('/chanel-2').render('channel-2')

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
