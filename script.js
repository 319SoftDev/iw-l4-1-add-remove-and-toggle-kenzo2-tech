console.log('kenzie')
//Mild
const subheader = document.querySelector('#subheading');
const changeColor = (e) => {
    subheader.style.color = 'blue'
}
subheader.addEventListener('click', changeColor )

//2.
const replyButton = document.querySelector('#reply-button')
const replyMessage = document.querySelector('#reply-message')

const removeClass = (e) => {
    replyMessage.classList.remove('hidden')
}
replyButton.addEventListener('click', removeClass)

//3.
const sendButton = document.querySelector('#send-button')
const cancelButton = document.querySelector('#cancel-button')

const addClass = (e) =>{
    replyMessage.classList.add('hidden')
}
sendButton.addEventListener('click',addClass)
cancelButton.addEventListener('click', addClass)
//Meduim

const OpenButton = document.querySelector('#open-button')
