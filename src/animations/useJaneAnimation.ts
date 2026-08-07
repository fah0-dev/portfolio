import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useJaneAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  textRef: React.RefObject<HTMLParagraphElement | null>,
  imgRef: React.RefObject<HTMLImageElement | null>
) => {
  useEffect(() => {
    const container = containerRef.current
    if (!container || !imgRef.current) return

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out' }
        )
      }

      gsap.fromTo(
        imgRef.current,
        { objectPosition: '0% 0%' },
        {
          objectPosition: '0% 90%',
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      )

      const smallImages = container.querySelectorAll('.red-john-small')
      if (smallImages.length > 0) {
        gsap.fromTo(
          smallImages,
          { opacity: 0, scale: 0.2 },
          {
            opacity: 0.35,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: '0% top',
              end: '0.5% top',
              scrub: true,
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, textRef, imgRef])
}
