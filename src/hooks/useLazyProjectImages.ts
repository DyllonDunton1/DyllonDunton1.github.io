import { useEffect } from 'react'

export const useLazyProjectImages = () => {
  useEffect(() => {
    const mainScroller = document.querySelector<HTMLElement>('.mainScroller')
    if (!mainScroller) return

    const images = Array.from(mainScroller.querySelectorAll<HTMLImageElement>('img'))
    images.forEach((image, index) => {
      image.decoding = 'async'

      if (index === 0) {
        image.loading = 'eager'
        image.setAttribute('fetchpriority', 'high')
        return
      }

      image.loading = 'lazy'
    })
  }, [])
}
