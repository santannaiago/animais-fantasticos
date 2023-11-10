export default class AnimaNumeros {
  constructor (numeros, target) {
    this.numeros = document.querySelectorAll(numeros) //'[data-numero]'
    this.observerTarget = document.querySelector(target)
    this.observerClass = observerClass
    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementaNumero (numero) {
    const total = +numero.innerText
    const inscremento = Math.floor(total / 100)
    let start = 0
    const timer = setInterval(() => {
      start += inscremento
      numero.innerText = start
      if (start > total) {
        numero.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }
  animaNumeros () {
    this.numeros.forEach(numero => this.constructor.incrementaNumero(numero))
  }

  handleMutation (mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumeros()
    }
  }

  addMutationObserver () {
    this.observer = new MutationObserver(this.handleMutation)
    observer.observe(this.observerTarget, { attributes: true })
  }

  init () {
    if(this.numeros.length && this.observerTarget){
      this.addMutationObserver()
    }
    return this
  }
}
