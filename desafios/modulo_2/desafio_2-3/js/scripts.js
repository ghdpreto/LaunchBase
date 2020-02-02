const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function () {

        const idConteudo = card.getAttribute('id')

        modalOverlay.classList.add('active')

        if (idConteudo == 'starter' || idConteudo == 'launchbase' || idConteudo == 'gostack') {
            modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${idConteudo}`
        } else{
            modalOverlay.querySelector('iframe').src = `https://www.youtube.com.br/embed/${idConteudo}`
        }
    })
}


document.querySelector('.max-modal').addEventListener('click', function (){

    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
        modal.querySelector('.max-modal i').innerHTML = 'fullscreen'
    }else{
        modal.classList.add('maximize')
        modal.querySelector('.max-modal i').innerHTML = 'fullscreen_exit'
    }
})


document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector('iframe').src = ''
})



