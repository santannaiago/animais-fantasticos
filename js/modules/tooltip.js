export default class Tooltip {
  constructor (tooltips) {
    this.tooltips = document.querySelectorAll(tooltips)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  onMouseMove (event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`
    if (event.pageX + 190 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`
    }
  }

  onMouseLeave ({ currentTarget }) {
    this.tooltipBox.remove()
    currentTarget.removeEventListener('mouseleave', onMouseLeave)
    currentTarget.removeEventListener('mousemove', onMouseMove)
  }

  criarTooltipBox (element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
  }

  onMouseOver (event) {
    this.criarTooltipBox(event.currentTarget)
    event.currentTarget.addEventListener('mousemove', this.onMouseMove)
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave)
  }

  addTooltipEvent () {
    this.tooltips.forEach(item => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init () {
    if (this.tooltips.length) {
      this.addTooltipEvent()
    }
    return this
  }
}
