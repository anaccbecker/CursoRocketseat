// Criando variável do botão
const buttonOpenModal = document.getElementById('openModal')

// Criando variável da janela
const modalWrapper = document.querySelector('.modal-wrapper')
console.log(modalWrapper.classList)

// Criando a abertura da janela
buttonOpenModal.onclick = function () {
    modalWrapper
    .classList
    .remove('invisible')
}

// Criando o fechamento da janela

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'
    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})
 

console.log(modalWrapper.classList[1])