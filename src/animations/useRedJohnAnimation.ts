import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useRedJohnAnimation = (
  sectionRef: React.RefObject<HTMLDivElement | null>,
  imageRef: React.RefObject<HTMLImageElement | null>
) => {
  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    if (!section || !image) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        { height: '0vh' },
        {
          height: '100vh',
          ease: 'none',
          scrollTrigger: {
            trigger: section.parentElement,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        image,
        { scale: 0.15, rotate: 135 },
        {
          scale: 1,
          rotate: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section.parentElement,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        }
      )

      const smallImages = section.querySelectorAll('.red-john-small')
      if (smallImages.length > 0) {
        gsap.fromTo(
          smallImages,
          { opacity: 0, scale: 0.2, rotate: -30 },
          {
            opacity: 0.35,
            scale: 0.7,
            rotate: 0,
            stagger: 0.03,
            ease: 'none',
            scrollTrigger: {
              trigger: section.parentElement,
              start: 'top 70%',
              end: 'top top',
              scrub: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [sectionRef, imageRef])
}
