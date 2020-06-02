import Ws from '@adonisjs/websocket-client'

let isConnected = false
let ws = null
const chatForm = document.querySelector('#chat-form')

ws = Ws().connect()

ws.on('open', () => {

  isConnected = true
  subscribeToChannel()

})

ws.on('error', () => {
  console.log('ws error')
  isConnected = false
})

ws.on('close', () => {
  console.log('ws close')
  isConnected = false
})

const subscribeToChannel = () => {

  const topic = location.pathname.replace('/channels/', '');

  const chat = ws.subscribe(`chat:${topic}`)

  chat.on('error', (error) => {
    console.log('chat error', error)
  })

  chat.on('close', () => {
    console.log('chat close')
  })

  chat.on('message', (message) => {
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

    const messageValue = document.createTextNode(message.message.body)

    strongNode.innerHTML = message.username + ' '
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
  })
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const message = document.querySelector('#message')

  const topic = location.pathname.replace('/channels/', '')

  console.log(message.value.length)

  if (message.value.length)
    ws.getSubscription(`chat:${topic}`).emit('message', {
      body: message.value,
      channel: topic
  })

  message.value = '';
  message.focus()

})


