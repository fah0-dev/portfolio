import { useSocialMarqueeAnimation } from '../animations/useSocialMarqueeAnimation'
import { socialLogos } from '../content/sociallogo'
import { IoIosStarOutline } from 'react-icons/io'


const NetworkFooter = () => {
  const { trackRef, handleMouseEnter, handleMouseLeave } = useSocialMarqueeAnimation(100)
  const copies = 4

  return (
    <div className="w-full flex flex-col">
      {/* Pink Network Section */}
      <div className="relative w-full h-[50vh] md:h-[75vh] bg-[#D74274] flex items-center justify-center overflow-hidden select-none">
        {/* Soft Ambient Light Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.2)_0%,_rgba(244,114,182,0.1)_45%,_transparent_70%)] pointer-events-none z-0" />

        {/* Large Faint Watermark Text */}
        <h1 className="absolute inset-0 flex items-center justify-center fontDomine text-[18vw] md:text-[16vw] font-bold uppercase text-[#E46894]/35 tracking-widest pointer-events-none select-none z-[1]">
          NETWORK
        </h1>

        {/* Social Media Infinite Marquee Logo Loop */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
          <div
            ref={trackRef}
            className="flex items-center will-change-transform"
            style={{ width: 'max-content' }}
          >
            {Array.from({ length: copies }, (_, copyIndex) => (
              <div
                key={copyIndex}
                data-set={copyIndex}
                className="flex items-center shrink-0 gap-8 md:gap-16 px-4 md:px-8"
              >
                {socialLogos.map((item, i) => (
                  <div key={`${copyIndex}-${i}`} className="flex items-center gap-8 md:gap-16">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      aria-label={item.name}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="text-white text-4xl sm:text-5xl md:text-7xl transition-all duration-300 hover:scale-125 hover:text-black shrink-0 cursor-pointer z-20"
                    >
                      {item.icon}
                    </a>
                    <IoIosStarOutline className="text-2xl sm:text-3xl md:text-4xl text-rose-200/80 shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue Divider Line */}
    </div>
  )
}

export default NetworkFooter
