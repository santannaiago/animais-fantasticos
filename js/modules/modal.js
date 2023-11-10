export default class Modal {
  constructor (botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir) // 
    this.botaoFechar = document.querySelector(botaoFechar)
    this.containerModal = document.querySelector(container)
  }

  // função para ativar e desativar o modal
  toggleModal (event) {
    event.preventDefault()
    this.containerModal.classList.toggle('ativo')
  }

  // função para abrir o modal quando for clicado no botão abrir
  eventToggleModal (event) {
    event.preventDefault()
    this.toggleModal()
  }

  // função para fechar o modal quando for clicado fora do modal
  cliqueForaModal (event) {
    if (event.target === this) {
      this.toggleModal(event)
    }
  }

  init () {
    if (botaoAbrir && botaoFechar && containerModal) {
      this.botaoAbrir.addEventListener('click', this.eventToggleModal)
      this.botaoFechar.addEventListener('click', this.eventToggleModal)
      this.containerModal.addEventListener('click', this.cliqueForaModal)
    }
  }
}
