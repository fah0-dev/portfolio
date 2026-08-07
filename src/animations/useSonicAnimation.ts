import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useSonicAnimation = (
  sonicImgRef: React.RefObject<HTMLDivElement | null>,
  paragraphRef: React.RefObject<HTMLParagraphElement | null>,
  boxRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sonicImgRef.current) {
        gsap.fromTo(
          sonicImgRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sonicImgRef.current,
              start: 'top 80%',
            },
          }
        )
      }

      if (paragraphRef.current) {
        gsap.fromTo(
          paragraphRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: 'top 80%',
            },
          }
        )
      }

      if (boxRef.current) {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: boxRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [sonicImgRef, paragraphRef, boxRef])
}
