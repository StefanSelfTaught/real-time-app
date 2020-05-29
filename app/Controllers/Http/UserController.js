'use strict'

const User = use('App/Models/User')

class UserController {
  async register({ request, response, auth }) {
    const user = await User.create(request.only(['username', 'email', 'password']))

    await auth.login(user)

    return response.redirect('/')
  }

  async login({ request, response, auth, session }) {
    const { email, password } = request.all();

    try {
      await auth
        .remember(true)
        .attempt(email, password)
      return response.redirect('/')
    } catch (error) {
      session.flash({ loginError: 'Invalid Credentials' })
      return response.redirect('/login')
    }
  }
}

module.exports = UserController
