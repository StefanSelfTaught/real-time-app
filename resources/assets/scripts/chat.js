import 'regenerator-runtime/runtime.js'
import Ws from '@adonisjs/websocket-client'

let isConnected = false
let ws = null
let chat = null
let isTyping = false
const messageInput = document.querySelector('#message')
const chatForm = document.querySelector('#chat-form')
const messagesContainer = document.querySelector('#messages-container')

messagesContainer.scrollTop = messagesContainer.scrollHeight

let topic = location.pathname.replace('/channels/', '');

ws = Ws().connect()

ws.on('open', () => {

  console.log('open')

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

  chat = ws.subscribe(`chat:${topic}`)

  chat.on('ready', () => {
    chat.emit('connected')
  })

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
    smallNode.innerHTML = message.deliveredAt

    paragraphNode.appendChild(strongNode)
    paragraphNode.appendChild(smallNode)
    paragraphNode.appendChild(br1Node)
    paragraphNode.appendChild(messageValue)
    paragraphNode.appendChild(br2Node)

    contentNode.appendChild(paragraphNode)
    mediaContentNode.appendChild(contentNode)
    articleNode.appendChild(mediaContentNode)

    messagesContainer.appendChild(articleNode)

    messagesContainer.scrollTop = messagesContainer.scrollHeight
  })

  chat.on('typing', (userTyping) => {

    const articleNode = document.createElement('article')
    articleNode.classList.add('chat-message', 'media', 'has-background-light', `typing-${userTyping.replace(/\s/g, '')}`)

    const mediaContentNode = document.createElement('div')
    mediaContentNode.classList.add('media-content')

    const contentNode = document.createElement('div')
    contentNode.classList.add('content')

    const paragraphNode = document.createElement('p')

    const messageValue = document.createTextNode(`${userTyping} is typing ...`)

    paragraphNode.appendChild(messageValue)

    contentNode.appendChild(paragraphNode)
    mediaContentNode.appendChild(contentNode)
    articleNode.appendChild(mediaContentNode)

    messagesContainer.appendChild(articleNode)

    messagesContainer.scrollTop = messagesContainer.scrollHeight
  })

  chat.on('stopTyping', (userTyping) => {
    document.querySelector(`.typing-${userTyping}`).remove()
  })
}

messageInput.addEventListener('input', (event) => {

  if (!isTyping) {
    isTyping = true
    chat.emit('typing')
  }

  let lastTypingTime = (new Date()).getTime();

  setTimeout(() => {
    let typingTimer = (new Date()).getTime();
    let timeDiff = typingTimer - lastTypingTime;
    if (timeDiff >= 4000 && isTyping) {
      chat.emit('stopTyping')
      isTyping = false;
    }
  }, 4000);
})

chatForm.addEventListener('submit', (event) => {
  event.preventDefault()

  if (messageInput.value.length)
    chat.emit('message', {
      body: messageInput.value,
      channel: topic
  })

  chat.emit('stopTyping')
  isTyping = false;

  messageInput.value = '';
  messageInput.focus()

})


