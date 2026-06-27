import { useEffect } from 'react'

export const useLazyProjectImages = () => {
  useEffect(() => {
    const mainScroller = document.querySelector<HTMLElement>('.mainScroller')
    if (!mainScroller) return

    const images = Array.from(mainScroller.querySelectorAll<HTMLImageElement>('img'))
    images.forEach((image, index) => {
      if (index === 0) return
      image.loading = 'lazy'
      image.decoding = 'async'
    })
  }, [])
}
