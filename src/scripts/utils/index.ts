export function throttle(callback: (...args: any[]) => any, delay = 15) {
  let throttleTimeout: number | null = null,
    storedEvent: Event | null = null

  const throttledEventHandler = (event: Event) => {
    storedEvent = event
    const shouldHandleEvent = !throttleTimeout

    if (shouldHandleEvent) {
      callback(storedEvent)

      storedEvent = null
      throttleTimeout = window.setTimeout(() => {
        throttleTimeout = null
        if (storedEvent) {
          throttledEventHandler(storedEvent)
        }
      }, delay)
    }
  }

  return throttledEventHandler
}
