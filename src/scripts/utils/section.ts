export function filterShopifyEvent(
  event: any,
  domElement: HTMLElement,
  callback: (...args: any[]) => any
) {
  let executeCallback = false
  if (event.type.includes('shopify:section')) {
    if (
      domElement.hasAttribute('section') &&
      domElement.getAttribute('section') === event.detail.sectionId
    ) {
      executeCallback = true
    }
  } else if (
    event.type.includes('shopify:block') &&
    event.target === domElement
  ) {
    executeCallback = true
  }
  if (executeCallback) {
    callback(event)
  }
}
