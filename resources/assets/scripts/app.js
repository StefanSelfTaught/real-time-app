// import Ws from '@adonisjs/websocket-client'

document.addEventListener('DOMContentLoaded', () => {

  const chatForm = document.querySelector('#chat-form')
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {

        const target = el.dataset.target
        const $target = document.getElementById(target)

        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }

  if (document.querySelector('.delete')) {
    document.querySelector('.delete').addEventListener('click', () => {
      document.querySelector('.message').remove()
    })
  }

{/*<article class="chat-message media has-background-light">
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barbara Middleton</strong>
        <small>2:52 pm</small>
        <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Supellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br>
      </p>
    </div>
  </div>
</article>
*/}

  chatForm.addEventListener('submit', (event) => {
    const message = document.querySelector('#message')

    const articleNode = document.createElement('article')
    articleNode.classList.add('chat-message', 'media', 'has-background-light')

    const mediaContentNode = document.createElement('div')
    mediaContentNode.classList.add('media-content')

    const contentNode = document.createElement('div')
    contentNode.classList.add('content')

    const paragraphNode = document.createElement('p')
    const strongNode = document.createElement('strong')
    const smallNode = document.createElement('small')
    const br1Node = document.createElement('br')
    const br2Node = document.createElement('br')

    const messageValue = document.createTextNode(message.value)

    strongNode.innerHTML = 'Name '
    smallNode.innerHTML = '2:50 pm'

    paragraphNode.appendChild(strongNode)
    paragraphNode.appendChild(smallNode)
    paragraphNode.appendChild(br1Node)
    paragraphNode.appendChild(messageValue)
    paragraphNode.appendChild(br2Node)

    contentNode.appendChild(paragraphNode)
    mediaContentNode.appendChild(contentNode)
    articleNode.appendChild(mediaContentNode)

    document.querySelector('#messages-container').appendChild(articleNode)

    // message.value = '';
    // message.focus()

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
