import Delegate from 'ftdomdelegate/main'

export default class InputBindingManager {
  public delegateElement

  constructor() {
    this.delegateElement = new Delegate(document.body)
    this.delegateElement.on(
      'change',
      '[data-bind-value]',
      this._onValueChanged.bind(this)
    )
  }

  _onValueChanged(_: Event, _target: HTMLInputElement | HTMLSelectElement) {
    let target: HTMLInputElement | HTMLSelectElement | HTMLOptionElement =
      _target
    const targetId = target.getAttribute('data-bind-value')
    let targetElement: HTMLElement | null = null

    if (targetId) {
      targetElement = document.getElementById(targetId)
    }

    if (targetElement) {
      if (target.tagName === 'SELECT') {
        target = (target as HTMLSelectElement).options[
          (target as HTMLSelectElement).selectedIndex
        ]
      }
      targetElement.innerHTML = target.hasAttribute('title')
        ? target.getAttribute('title') ?? ''
        : target.value
    }
  }
}
