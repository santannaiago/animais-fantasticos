export default class Modal {
  constructor (botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir) // '[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]'
    this.botaoFechar = document.querySelector(botaoFechar)
    this.containerModal = document.querySelector(container)

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  toggleModal (event) {
    this.containerModal.classList.toggle('ativo')
  }

  eventToggleModal (event) {
    event.preventDefault()
    this.toggleModal()
  }

  cliqueForaModal (event) {
    if (event.target === this) {
      this.toggleModal(event)
    }
  }

  init () {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener('click', this.eventToggleModal)
      this.botaoFechar.addEventListener('click', this.eventToggleModal)
      this.containerModal.addEventListener('click', this.cliqueForaModal)
    }
  }
}
