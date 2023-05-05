import Delegate from 'ftdomdelegate/main'
import { triggerEvent } from '../utils/event'

export default class CustomHTMLElement extends HTMLElement {
  public _hasSectionReloaded: boolean
  public _rootDelegate: any
  public _delegate: any
  public intersectionObserver!: IntersectionObserver

  constructor() {
    super()
    this._hasSectionReloaded = false
    if (window.Shopify.designMode) {
      this.rootDelegate.on('shopify:section:select', (event: any) => {
        const parentSection = this.closest('.shopify-section')
        if (event.target === parentSection && event.detail.load) {
          this._hasSectionReloaded = true
        }
      })
    }
  }
  get rootDelegate() {
    return (this._rootDelegate =
      this._rootDelegate || new Delegate(document.documentElement))
  }
  get delegate() {
    return (this._delegate = this._delegate || new Delegate(this))
  }
  showLoadingBar() {
    triggerEvent(document.documentElement, 'theme:loading:start')
  }
  hideLoadingBar() {
    triggerEvent(document.documentElement, 'theme:loading:end')
  }
  untilVisible(
    intersectionObserverOptions = { rootMargin: '30px 0px', threshold: 0 }
  ) {
    const onBecameVisible = () => {
      this.classList.add('became-visible')
      this.style.opacity = '1'
    }
    return new Promise<void>((resolve) => {
      if (window.IntersectionObserver) {
        this.intersectionObserver = new IntersectionObserver((event) => {
          if (event[0].isIntersecting) {
            this.intersectionObserver.disconnect()
            requestAnimationFrame(() => {
              resolve()
              onBecameVisible()
            })
          }
        }, intersectionObserverOptions)
        this.intersectionObserver.observe(this)
      } else {
        resolve()
        onBecameVisible()
      }
    })
  }
  disconnectedCallback() {
    const intersectionObserver = this.intersectionObserver
    this.delegate.destroy()
    this.rootDelegate.destroy()
    if (intersectionObserver) {
      intersectionObserver.disconnect()
    }
    delete this._delegate
    delete this._rootDelegate
  }
}
