//HOMEWORK 1 Part 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExpr = /^[^\s@]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExpr.test(gmailInput.value)) {
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'not ok'
        gmailResult.style.color = 'red'
    }
}

//HOMEWORK 1 Part 2

const childBlock = document.querySelector('.child_block')

const moveSpeedChildBlock = 1
const parentBlockWidth = 448
let positionLeft = 0
let positionTop = 0

const moveBlock = () => {
    if (positionLeft < parentBlockWidth && positionTop === 0) {
        positionLeft++
        childBlock.style.left = `${positionLeft}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionLeft >= parentBlockWidth && positionTop < parentBlockWidth) {
        positionTop++
        childBlock.style.top = `${positionTop}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionLeft > 0 && positionTop > 0) {
        positionLeft--
        childBlock.style.left = `${positionLeft}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionLeft === 0 && positionTop > 0) {
        positionTop--
        childBlock.style.top = `${positionTop}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }
}
moveBlock()

//HOMEWORK 2
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const second = document.querySelector('#secondsS')

let num = 0
let interval;

const secondCounter = ()=>{
    num++
    second.innerHTML= num
}

start.addEventListener('click',()=>{
    clearInterval(interval)
    interval = setInterval(secondCounter,1000)
})
stop.addEventListener('click',()=>{
    clearInterval(interval)
})
reset.addEventListener('click',()=>{
    clearInterval(interval)
    num = 0
    second.innerHTML = '0'
})


