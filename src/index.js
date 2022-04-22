import './style.css'
const input = document.querySelector("input")
const messageList = document.querySelector('.message-list')

export const getPrintedCoords = () => {
    const coords = prompt('Введите ширину и долготу через запятую').split(',').map(s => s.trim())
    return coords
}

const addAutoCoordsMessage = (event) => (pos) => {
    const newMessage = document.createElement('div')
    newMessage.classList.add('messsage')
    const coords = pos.coords
    newMessage.innerHTML = `<div>${event.target.value}</div><div>${coords.latitude+' '+coords.longitude}</div><div>${new Date()}</div>`
    messageList.append(newMessage)
}

const addManualCoordsMessage = (event) => (err) => {
    const coords = getPrintedCoords()
    const newMessage = document.createElement('div')
    newMessage.classList.add('messsage')
    newMessage.innerHTML = `<div>${event.target.value}</div><div>${coords[0]+' '+coords[1]}</div><div>${new Date()}</div>`
    messageList.append(newMessage)
}

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        navigator.geolocation.getCurrentPosition(addAutoCoordsMessage(event), addManualCoordsMessage(event) )
    }
})
