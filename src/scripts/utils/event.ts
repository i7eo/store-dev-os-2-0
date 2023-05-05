export function triggerEvent(element: HTMLElement, name: string, data = {}) {
  element.dispatchEvent(
    new CustomEvent(name, {
      bubbles: true,
      detail: data,
    })
  )
}

export function triggerNonBubblingEvent(
  element: HTMLElement,
  name: string,
  data = {}
) {
  element.dispatchEvent(
    new CustomEvent(name, {
      bubbles: false,
      detail: data,
    })
  )
}
