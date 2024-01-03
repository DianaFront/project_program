const JSON_URL = 'https://jsonplaceholder.typicode.com'
const JSON_CARD = '/posts'

const fetchCard = async () => {

    const cards = document.querySelector('.card-block')
    try{
        const response = await fetch(`${JSON_URL}${JSON_CARD}`)
        const data = await response.json()
        await data.forEach((data) => {
            const cardBlock = document.createElement('div')
            cardBlock.setAttribute('class','card')
            cardBlock.innerHTML = `
                <h4 style="font-size: 14px;">${data.title}</h4>
                <img class="img-card-block" src="https://gosinspekciya.gov.by/upload/medialibrary/e9d/e9d4578d833e8177b66616920713fc84.jpg" alt="a">
                <span style="color: #f1f1f">${data.body}</span>
        `
            cards.append(cardBlock)
        })
    }catch (e){
        console.log(e + 'error')
    }
}
fetchCard()




