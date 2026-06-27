import { useEffect } from 'react'

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'))
}

const isMobileLayout = () => window.matchMedia('(max-width: 768px)').matches

export const useMainScrollerWheel = () => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isMobileLayout()) return
      if (event.ctrlKey || event.metaKey) return
      if (isEditableTarget(event.target)) return

      const mainScroller = document.querySelector<HTMLElement>('.mainScroller')
      if (!mainScroller) return
      if (mainScroller.scrollHeight <= mainScroller.clientHeight) return

      const targetElement = event.target instanceof HTMLElement ? event.target : null
      if (targetElement && mainScroller.contains(targetElement)) return

      event.preventDefault()
      mainScroller.scrollBy({
        top: event.deltaY,
        left: event.deltaX,
        behavior: 'auto',
      })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])
}
