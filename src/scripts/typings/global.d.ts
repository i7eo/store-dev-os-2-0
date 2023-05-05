import { type BOOMR, type ShopifyAnalytics, type Shopify } from './shopify'
import { type SPR, type SPRCallbacks } from './shopify-product-review'

declare global {
  interface Window {
    BOOMR: BOOMR
    ShopifyAnalytics: ShopifyAnalytics
    Shopify: Shopify

    SPR: SPR
    SPRCallbacks: SPRCallbacks
  }
}

export {}
