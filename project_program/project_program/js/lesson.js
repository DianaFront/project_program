//PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'not OK'
        phoneResult.style.color = 'red'
    }
}

//tab slider
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = ' none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
// auto-slider

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentBlocks.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

autoSlider()

//converter

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')


const converter = (element, targetElementUsd, targetElementEur, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            switch (current) {
                case "som":
                    targetElementUsd.value = (element.value / data.usd).toFixed(2)
                    targetElementEur.value = (element.value / data.eur).toFixed(2)
                    break
                case "usd":
                    targetElementUsd.value = (element.value * data.usd).toFixed(2)
                    targetElementEur.value = (element.value * (data.usd / data.eur)).toFixed(2)
                    break
                case "eur":
                    targetElementEur.value = (element.value * data.eur).toFixed(2)
                    targetElementUsd            .value = (element.value * (data.eur / data.usd)).toFixed(2)
                    break
                default:
            }
            element.value === '' && (targetElementUsd.value = '', targetElementEur.value = '')
        }
    }
}
converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd, 'eur')


//card switcher

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next')
btnPrev = document.querySelector('#btn-prev')


let countCard = 1

const request = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
    
            `
        })
}

btnNext.addEventListener('click', () => {
    if (countCard < 200) {
        countCard++
        request(countCard)
    } else {
        countCard = 1
        request(countCard)
    }


})
btnPrev.addEventListener('click', () => {
    if (countCard > 1) {
        countCard--
        request(countCard)
    } else {
        countCard = 200
    }


})
request(countCard)


//fetch request

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })


//search weather
const cityNameInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

const citySearch = () => {
    cityNameInput.oninput = async (event) => {
        try{
            const response = await fetch(`${BASE_URL}?q=${event.target.value}&appid=${API_KEY}`)
            const data =await response.json()
            city.innerHTML = data?.name ? data?.name : 'город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + "&deg;C" : '...'
        }catch (e){
            console.log(e.message, 'error')
        }
    }
}

citySearch()




