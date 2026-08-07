import { useRef } from 'react'
import sonic from '../assets/sonic.svg'
import spongebob from '../assets/2ik1n5xxs8x71.gif'
import texture from '../assets/texture.png'
import { useSonicAnimation } from '../animations/useSonicAnimation'
import '../App.css'

function Sonic() {
    const sonicImgRef = useRef<HTMLDivElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const boxRef = useRef<HTMLDivElement>(null)

    useSonicAnimation(sonicImgRef, paragraphRef, boxRef)

    return (
        <div className="min-h-[110vh] grid gap-4 grid-cols-1 lg:grid-cols-7 overflow-hidden">
            <div
                ref={sonicImgRef}
                className="col-span-1 lg:col-span-3 bg-blue-700 flex items-center justify-center overflow-hidden"
            >
                <img
                    src={sonic}
                    alt=""
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="relative col-span-1 lg:col-span-4 bg-[#faefe5] px-6 sm:px-8 lg:px-10 py-10 sm:py-14 lg:py-20 flex flex-col justify-between gap-16 lg:gap-40 items-center overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center mix-blend-multiply"
                    style={{ backgroundImage: `url(${texture})` }}
                />
                <p
                    ref={paragraphRef}
                    className="relative z-10 drop-cap-text fontDomine text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] 2xl:text-[3.2rem] min-[1900px]:text-[3.5rem] leading-relaxed text-black"
                    style={{ letterSpacing: '1px' }}
                >
                    <img
                        className="drop-cap-img"
                        src={spongebob}
                        alt=""
                    />
                    The internet is full of websites trying to sell you something,
                    teach you something, or convince you they're changing the world.
                    This isn't one of them. It's just a place to explore, waste a few
                    minutes, and continue the completely serious investigation into
                    the secret Krabby Patty recipe. If you happen to find it while
                    you're here... no, you didn't.
                </p>

                <div
                    ref={boxRef}
                    className="relative z-10 w-full lg:w-[40vw] min-h-[300px] sm:min-h-[350px] lg:min-h-[50vh] bg-[#fff2db] -rotate-3 outline-2 shadow-lg p-6 sm:p-8 lg:p-10 flex items-center justify-center"
                >
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] 2xl:text-[3.2rem] min-[1900px]:text-[3.5rem] fontDomine leading-relaxed text-black">
                        Welcome. Make yourself comfortable. The Krabby Patty recipe
                        is definitely not hidden somewhere around here.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sonic