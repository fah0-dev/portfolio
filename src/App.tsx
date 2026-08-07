import { useRef } from 'react'
import Jane from './components/Jane'
import Sonic from './components/Sonic'
import Skills from './components/Skills'
import NetworkFooter from './components/NetworkFooter'
import RedJohn from './assets/redjohn.png'
import { useSmoothScroll } from './animations/useSmoothScroll'
import { useRedJohnAnimation } from './animations/useRedJohnAnimation'
import './App.css'

function App() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useSmoothScroll()
  useRedJohnAnimation(sectionRef, imageRef)

  return (
    <div className="app-container">
      <Jane />
      <Sonic />
      <Skills />
      <NetworkFooter />


      {/* Red John */}
      <div className="w-full h-screen overflow-hidden">
        <div
          ref={sectionRef}
          className="relative w-full h-full flex items-center justify-center bg-[#F29A5A] overflow-hidden"
        >
          {/* Small Red Johns */}
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


          {/* Main Red John */}
          <img
            ref={imageRef}
            src={RedJohn}
            alt="Red John"
            className="relative z-10 w-[280px] sm:w-[360px] md:w-[420px] max-w-[85vw] select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  )
}

export default App