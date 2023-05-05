import CustomHTMLElement from '../custom-html-element'

export class LoadingBar extends CustomHTMLElement {
  constructor() {
    super()
    this.rootDelegate.on('theme:loading:start', this.show.bind(this))
    this.rootDelegate.on('theme:loading:end', this.hide.bind(this))
    this.delegate.on('transitionend', this._onTransitionEnd.bind(this))
  }
  show() {
    this.classList.add('is-visible')
    this.style.transform = 'scaleX(0.4)'
  }
  hide() {
    this.style.transform = 'scaleX(1)'
    this.classList.add('is-finished')
  }
  _onTransitionEnd(event: any) {
    if (
      event.propertyName === 'transform' &&
      this.classList.contains('is-finished')
    ) {
      this.classList.remove('is-visible')
      this.classList.remove('is-finished')
      this.style.transform = 'scaleX(0)'
    }
  }
}

window.customElements.define('loading-bar', LoadingBar)
