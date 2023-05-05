import Delegate from 'ftdomdelegate/main'
import InputBindingManager from './input-binding-manager'

/**
 * @description handle Shopify Product reviews app, see https://apps.shopify.com/product-reviews
 */
function handleShopifyProductReview() {
  if (window.Shopify.designMode) {
    document.addEventListener('shopify:section:load', () => {
      if (window.SPR) {
        window.SPR.initDomEls()
        window.SPR.loadProducts()
      }
    })
  }

  window.SPRCallbacks = {
    onFormSuccess: (_: Event, info: Record<string, any>) => {
      document
        .getElementById(`form_${info.id}`)
        ?.classList.add('spr-form--success')
    },
  }
}

/**
 * @description handle viewport width
 */
function handleViewportWidth() {
  let previousClientWidth = window.visualViewport
    ? window.visualViewport.width
    : document.documentElement.clientWidth
  const setViewportProperty = () => {
    const clientWidth = window.visualViewport
        ? window.visualViewport.width
        : document.documentElement.clientWidth,
      clientHeight = window.visualViewport
        ? window.visualViewport.height
        : document.documentElement.clientHeight
    if (clientWidth === previousClientWidth) {
      return
    }
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty(
        '--window-height',
        `${clientHeight}px`
      )
      previousClientWidth = clientWidth
    })
  }

  setViewportProperty()

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setViewportProperty)
  } else {
    window.addEventListener('resize', setViewportProperty)
  }
}

/**
 * @description handle element dom, such as: table video ...
 */
function handleElement() {
  document.querySelectorAll('.rte table').forEach((table) => {
    table.outerHTML = `<div class="table-wrapper">${table.outerHTML}</div>`
  })
  document.querySelectorAll('.rte iframe').forEach((_iframe) => {
    const iframe = _iframe as HTMLIFrameElement
    if (
      iframe.src.indexOf('youtube') !== -1 ||
      iframe.src.indexOf('youtu.be') !== -1 ||
      iframe.src.indexOf('vimeo') !== -1
    ) {
      iframe.outerHTML = `<div class="video-wrapper">${iframe.outerHTML}</div>`
    }
  })
}

/**
 * @description handle event delegate for document.body
 */
function handleDocumentBodyDelegate() {
  const documentDelegate = new Delegate(document.body)
  documentDelegate.on(
    'keyup',
    'input:not([type="checkbox"]):not([type="radio"]), textarea',
    (_: Event, target: any) => {
      target.classList.toggle('is-filled', target.value !== '')
    }
  )
  documentDelegate.on('change', 'select', (_: Event, target: any) => {
    target.parentNode.classList.toggle('is-filled', target.value !== '')
  })
}

/**
 * @description handle event delegate for document.documentElement
 */
function handleDocumentElementDelegate() {
  const documentDelegate = new Delegate(document.documentElement)
  documentDelegate.on(
    'click',
    '[data-smooth-scroll]',
    (event: Event, target: any) => {
      const elementToScroll = document.querySelector(
        target.getAttribute('href')
      )
      if (elementToScroll) {
        event.preventDefault()
        elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  )
}

/**
 * @description handle keup event which triggered by 'Tab'
 */
function handleKeyupTriggeredByTab() {
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Tab') {
      document.body.classList.remove('no-focus-outline')
      document.body.classList.add('focus-outline')
    }
  })
}

/**
 * @description page setup handle
 */
export function setup() {
  new InputBindingManager()
  handleShopifyProductReview()
  handleViewportWidth()
  handleElement()
  handleDocumentBodyDelegate()
  handleDocumentElementDelegate()
  handleKeyupTriggeredByTab()
}

setup()
