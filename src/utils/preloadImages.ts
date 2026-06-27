const normalizeAssetPath = (src: string) => {
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
    return src
  }

  return `/${src}`
}

export const preloadImages = (srcs: string[]) => {
  if (typeof window === 'undefined') return

  srcs.forEach((src) => {
    const normalizedSrc = normalizeAssetPath(src)

    const preloadAlreadyExists = Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[data-preload-image]')
    ).some((link) => link.dataset.preloadImage === normalizedSrc)

    if (!preloadAlreadyExists) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = normalizedSrc
      link.dataset.preloadImage = normalizedSrc
      document.head.appendChild(link)
    }

    const image = new Image()
    image.src = normalizedSrc
  })
}
