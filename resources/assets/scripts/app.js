// import Ws from '@adonisjs/websocket-client'

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }

  document.querySelector('.delete').addEventListener('click', () => {
    
    document.querySelector('.message').remove()

  })

  // let ws = null

  // const startChat = () => {
  //   ws = Ws().connect()

  //   ws.on('open', () => {
  //     $('.connection-status').addClass('connected')
  //     subscribeToChannel()
  //   })

  //   ws.on('error', () => {
  //     $('.connection-status').removeClass('connected')
  //   })
  // }

  // if(window.username) {
  //   startChat()
  // }

  // const subscribeToChannel = () => {
  //   const chat = ws.subscribe('chat')

  //   chat.on('error', () => {
  //     $('.connection-status').removeClass('connected')
  //   })

  //   chat.on('message', (message) => {
  //     $('.messages').append(`
  //     <div class="message"><h3> ${message.username} </h3> <p> ${message.body} </p> </div>
  //   `)
  //   })
  // }

  // $('#message').keyup(function(e) {
  //   if (e.which === 13) {
  //     e.preventDefault()

  //     const message = $(this).val()
  //     $(this).val('')

  //     ws.getSubscription('chat').emit('message', {
  //       username: window.username,
  //       body: message,
  //     })
  //     return
  //   }
  // })
})
