import { useRef } from 'react'
import image from "../assets/Untitled.png"
import RedJohn from "../assets/redjohn.png"
import { useJaneAnimation } from "../animations/useJaneAnimation"

const Jane = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)

    useJaneAnimation(containerRef, textRef, imgRef)

    return (
        <div ref={containerRef} className="relative w-full h-[220vh] bg-black">
            <div className="absolute left-0 top-[55vh] w-full h-[165vh] bg-black overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 100 }).map((_, i) => {
                        const width = 35 + ((i * 17) % 55)
                        const left = i % 2 === 0 ? (i * 13) % 40 : 60 + ((i * 17) % 40)
                        const top = (i * 37) % 100
                        const rotate = (i * 23) % 40 - 20

                        return (
                            <img
                                key={i}
                                src={RedJohn}
                                alt=""
                                className="red-john-small absolute select-none opacity-0"
                                style={{
                                    width: `${width}px`,
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    transform: `rotate(${rotate}deg)`,
                                }}
                            />
                        )
                    })}
                </div>

                <img
                    src={RedJohn}
                    alt="Red John"
                    className="relative z-10 w-[450px] select-none pointer-events-none"
                />
            </div>

            <div className="sticky top-0 w-full min-h-[55vh] h-auto min-[1550px]:h-[55vh] bg-black grid grid-cols-1 min-[1550px]:grid-cols-5 gap-2 overflow-hidden z-10">
                <div className="col-span-1 min-[1550px]:col-span-3 bg-[#F29A5A] p-6 sm:p-10 min-[1550px]:p-12 flex items-center">
                    <p ref={textRef} className="min-[2000px]:!text-[13.0rem] text-8xl min-[2500px]:!text-[14.9rem] 2xl:text-[10rem]    xl:text-[9rem] lg:text-[8rem] md:text-[7rem] text-black uppercase font-extrabold fontDomine leading-tight min-[1550px]:leading-none">
                        about Me , <span className="py-2 min-[1550px]:py-10">fah0</span>
                    </p>
                </div>

                <div className="flex items-center justify-center h-[350px] min-[1550px]:h-full bg-blue-500 col-span-1 min-[1550px]:col-span-2 overflow-hidden">
                    <img
                        ref={imgRef}
                        className="w-full h-full object-cover object-[0%_0%] transition-transform duration-300 min-[1600px]:max-[1700px]:scale-[1.65]"
                        src={image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Jane