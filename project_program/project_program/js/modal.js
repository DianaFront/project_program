//modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = ()=>{
    modal.style.display = 'block'
    document.body.style.owerflow = 'hidden'
}
const closeModal = ()=>{
    modal.style.display = 'none'
    document.body.style.owerFlow = ''
}
modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()

// HOMEWORK 3

const showModal = () => {
    const modal = document.querySelector('.modal')
    modal.style.display = 'block'
}

setTimeout(showModal, 10000)

const scrollHandler = ()=>{
    if((window.innerHeight + window.scrollY)>= document.body.offsetHeight){
        openModal()
        window.removeEventListener('scroll', scrollHandler)

    }
}

window.addEventListener('scroll',scrollHandler)


