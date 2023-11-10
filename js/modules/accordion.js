export default class initAccordion {
  constructor (list) {
    this.accordionList = document.querySelectorAll(list)
    this.activeClass = 'ativo'
  }

  toggleAccordion () {
    this.classList.toggle(this.activeClass)
    this.nextElementSibling.classList.toggle(this.activeClass)
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', this.toggleAccordion)
    })
  }

  init () {
    if (accordionList.length) {
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent()
    }
  }
}
