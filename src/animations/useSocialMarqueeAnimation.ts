import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useSocialMarqueeAnimation = (speed = 100) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const firstSet = track.querySelector('[data-set="0"]') as HTMLElement
    if (!firstSet) return

    const timer = setTimeout(() => {
      const setWidth = firstSet.offsetWidth
      if (setWidth === 0) return

      if (tweenRef.current) {
        tweenRef.current.kill()
      }

      const duration = setWidth / speed

      gsap.set(track, { x: 0 })

      tweenRef.current = gsap.to(track, {
        x: -setWidth,
        duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            const val = parseFloat(String(x))
            return ((val % setWidth) + setWidth) % setWidth * -1
          }),
        },
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      if (tweenRef.current) {
        tweenRef.current.kill()
        tweenRef.current = null
      }
    }
  }, [speed])

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5, ease: 'power2.out' })
    }
  }

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5, ease: 'power2.in' })
    }
  }

  return { trackRef, handleMouseEnter, handleMouseLeave }
}
