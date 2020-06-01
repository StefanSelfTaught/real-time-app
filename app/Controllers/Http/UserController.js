'use strict'

const User = use('App/Models/User')

class UserController {
  async register({ request, response, auth, session }) {
    const user = await User.create(
      request.only(['username', 'email', 'password'])
    )

    await auth.login(user)

    session.flash({
      notification: { type: 'success', message: 'Signed in successfully!' },
    })

    return response.redirect('/')
  }

  async login({ request, response, auth, session }) {
    const { email, password, remember } = request.all()

    try {

      if (!!remember) {
        await auth.remember(true).attempt(email, password)
      } else {
        await auth.attempt(email, password)
      }

      session.flash({
        notification: { type: 'success', message: 'Logged in successfully!' },
      })

      return response.redirect('/')
    } catch (error) {
      session.flash({
        notification: { type: 'danger', message: 'Invalid Credentials' },
      })

      return response.redirect('/login')
    }
  }
}

module.exports = UserController
