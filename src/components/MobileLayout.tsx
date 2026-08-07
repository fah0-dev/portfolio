import RedJohn from '../assets/redjohn.png'
import { IoIosStarOutline } from 'react-icons/io'
import '../App.css'
import { useSocialMarqueeAnimation } from '../animations/useSocialMarqueeAnimation'
import { socialLogos } from '../content/sociallogo'

/**
 * Mobile-optimized layout for the portfolio.
 * Full-screen Red John background with scattered images
 * and a social media marquee pinned to the bottom.
 * Shown only on screens below 768px (md breakpoint).
 */
const MobileLayout = () => {
  const { trackRef, handleMouseEnter, handleMouseLeave } = useSocialMarqueeAnimation(100)

  return (
    <div className="relative w-full h-screen flex flex-col bg-[#F29A5A] overflow-hidden">

      {/* ─── Scattered Small Red Johns ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 200 }).map((_, i) => {
          const side = i % 2 === 0 ? 'left' : 'right'

          return (
            <img
              key={i}
              src={RedJohn}
              alt=""
              className="red-john-small absolute select-none"
              style={{
                width: `${35 + Math.random() * 55}px`,
                left:
                  side === 'left'
                    ? `${Math.random() * 38}%`
                    : `${62 + Math.random() * 38}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 40 - 20}deg)`,
              }}
            />
          )
        })}
      </div>

      {/* ─── Main Red John (centered) ─── */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
        <img
          src={RedJohn}
          alt="Red John"
          className="relative z-10 w-[280px] max-w-[85vw] select-none pointer-events-none"
        />
        <p className="text-white font-bold text-2xl z-10 text-center">hi, I apologize that the site isn't working on mobile phones at the moment; this is intentional, so don't worry. </p>
      </div>

      {/* ─── Social Media Marquee (bottom) ─── */}
      <div className="relative z-10 w-full h-[120px] flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ width: 'max-content' }}
        >
          {Array.from({ length: 4 }, (_, copyIndex) => (
            <div
              key={copyIndex}
              data-set={copyIndex}
              className="flex items-center shrink-0 gap-12 px-6"
            >
              {socialLogos.map((item, i) => (
                <div key={`${copyIndex}-${i}`} className="flex items-center gap-12">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                    aria-label={item.name}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="text-white text-6xl transition-all duration-300 active:scale-125 active:text-black shrink-0 cursor-pointer z-20"
                  >
                    {item.icon}
                  </a>
                  <IoIosStarOutline className="text-4xl text-rose-200/80 shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileLayout
