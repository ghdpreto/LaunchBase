const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function () {

        const idConteudo = card.getAttribute('id')

        if (idConteudo == 'starter' || idConteudo == 'launchbase' || idConteudo == 'gostack') {
            modalOverlay.classList.add('active')
            modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${idConteudo}`
        } else{
            window.location.href = `/video?id=${idConteudo}`
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



