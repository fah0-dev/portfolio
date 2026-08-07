import Looplogo from '../animations/Looplogo'
import { skills } from '../content/looplogo'

const Skills = () => {
    return (
        <>
            <div className="relative w-full h-[100px] sm:h-[130px] lg:h-[150px] overflow-hidden bg-blue-700 flex items-center uppercase">
                <Looplogo
                    items={skills}
                    speed={150}
                    direction="left"
                    fontSize={48}
                    gap={80}
                    pauseOnHover={false}
                    textColor="#fff"
                />
            </div>

            <div className="w-full bg-black grid grid-cols-1 lg:grid-cols-3 h-auto gap-1 p-1 md:p-0">

                {/* LIBRARIES / FRAMEWORKS */}
                <div className="bg-white hover:bg-[#e5d9c1] rounded-sm p-6 sm:p-8 min-[1800px]:p-12 flex flex-col justify-between gap-6 sm:gap-8 min-[1800px]:gap-12 group/item transition-all duration-100 h-full min-h-[260px] sm:min-h-[320px] min-[1800px]:min-h-[420px]">
                    <div className="flex justify-between items-baseline">
                        <h3 className="fontDomine text-lg sm:text-xl lg:text-2xl min-[1800px]:text-3xl min-[2200px]:text-4xl font-bold uppercase tracking-widest text-black">
                            Libraries / Frameworks
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 min-[1800px]:gap-8 mt-2 sm:mt-4">
                        {['React', 'Tailwind CSS', 'Next.js'].map((item, duration) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 sm:gap-4 min-[1800px]:gap-6 group-hover/item:translate-x-2 transition-all"
                                style={{ transitionDelay: `${duration * 100}ms` }}
                            >
                                <span className="text-[#E8915A] text-lg sm:text-xl min-[1800px]:text-2xl min-[2200px]:text-3xl">
                                    →
                                </span>

                                <span className="fontDomine text-base sm:text-lg lg:text-xl min-[1800px]:text-2xl min-[2200px]:text-3xl text-black">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LANGUAGES */}
                <div className="bg-white group/item rounded-sm p-6 sm:p-8 min-[1800px]:p-12 flex flex-col justify-between gap-6 sm:gap-8 min-[1800px]:gap-12 hover:bg-[#e5d9c1] transition-all duration-100 h-full min-h-[260px] sm:min-h-[320px] min-[1800px]:min-h-[420px]">
                    <div className="flex justify-between items-baseline">
                        <h3 className="fontDomine text-lg sm:text-xl lg:text-2xl min-[1800px]:text-3xl min-[2200px]:text-4xl font-bold uppercase tracking-widest text-black">
                            Languages
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 min-[1800px]:gap-8 mt-2 sm:mt-4">
                        {['JavaScript', 'TypeScript', 'Lua'].map((item, duration) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 sm:gap-4 min-[1800px]:gap-6 group-hover/item:translate-x-2 transition-all"
                                style={{ transitionDelay: `${duration * 100}ms` }}
                            >
                                <span className="text-[#E8915A] text-xs sm:text-sm min-[1800px]:text-base font-mono">
                                    {'<>'}
                                </span>

                                <span className="fontDomine text-base sm:text-lg lg:text-xl min-[1800px]:text-2xl min-[2200px]:text-3xl text-black">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CORE DISCIPLINES */}
                <div className="bg-[#E8915A] rounded-sm p-6 sm:p-8 min-[1800px]:p-12 flex flex-col justify-between gap-6 sm:gap-8 min-[1800px]:gap-12 group/item hover:bg-[#f3a369] transition-all duration-100 h-full min-h-[260px] sm:min-h-[320px] min-[1800px]:min-h-[420px]">
                    <div className="flex justify-between items-baseline">
                        <h3 className="fontDomine text-lg sm:text-xl lg:text-2xl min-[1800px]:text-3xl min-[2200px]:text-4xl font-bold uppercase tracking-widest text-black">
                            Core Disciplines
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 min-[1800px]:gap-8 mt-2 sm:mt-4">
                        {[
                            'Web Design',
                            'Frontend Development',
                            'UI/UX Design',
                            'Creative Coding'
                        ].map((item, duration) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 sm:gap-4 min-[1800px]:gap-6 group-hover/item:translate-x-2 transition-all"
                                style={{ transitionDelay: `${duration * 100}ms` }}
                            >
                                <span className="text-black text-lg sm:text-xl min-[1800px]:text-2xl min-[2200px]:text-3xl">
                                    ✓
                                </span>

                                <span className="fontDomine text-base sm:text-lg lg:text-xl min-[1800px]:text-2xl min-[2200px]:text-3xl text-black">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Skills