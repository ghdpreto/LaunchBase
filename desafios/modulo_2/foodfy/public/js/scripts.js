const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')

for (let card of cards) {
    card.addEventListener('click', function () {
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.modal-card-close').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
})


