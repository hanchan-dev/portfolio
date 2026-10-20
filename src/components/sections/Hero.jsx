import hero from "../../assets/images/hero.webp"
import {ArrowDownIcon} from "lucide-react"
import {socials} from "../../data/socials.js"
import CvDownloadButton from "../ui/CvDownloadButton.jsx"

const Hero = () => {
    return (
        <div className='relative overflow-x-clip min-h-screen flex flex-col'>
            <section
                id='home'
                className='body-font z-10'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-20 flex-col-reverse lg:flex-row items-center justify-between lg:mt-0 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'
                             data-aos='fade-down'
                             data-aos-delay='400'>
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={social.name}
                                    className='transform hover:scale-110 transition-transform duration-300'>
                                    <img
                                        src={social.icon}
                                        alt={social.name}
                                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain brightness-75 dark:brightness-100"
                                    />
                                </a>
                            ))}
                        </div>
                        <h1
                            className="title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold text-gray-900 dark:text-white"
                            data-aos='fade-up'
                            data-aos-delay='500'
                        >
                            Handika Chandra Pratama
                        </h1>
                        <p
                            className="mb-1 sm:mb-2 leading-relaxed max-w-md sm:max-w-lg text-gray-700 dark:text-gray-300"
                            data-aos='fade-up'
                            data-aos-delay='600'
                        >
                            I build scalable and maintainable web systems with a strong focus on backend architecture and long-term performance. Passionate about designing reliable foundations that grow with real-world demands.
                        </p>

                        <div className='w-full pt-4 sm:pt-6'>
                            <div
                                className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'>
                                {/* CV Download (pilih bahasa) */}
                                <CvDownloadButton/>

                                {/* Get In Touch */}
                                <a
                                    href="#contacts"
                                    className="w-full sm:w-auto inline-flex items-center justify-center
                                               text-gray-800 dark:text-white
                                               border-2 border-orange-500
                                               hover:bg-orange-500 dark:hover:bg-orange-600
                                               hover:text-white
                                               py-3 px-6 sm:px-8
                                               rounded-full text-base sm:text-lg font-semibold
                                               transition-all duration-300"
                                >
                                    <ArrowDownIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* My Image */}
                    <div
                        className='lg:w-1/2 w-full max-w-sm sm:max-w-md lg:max-w-lg mb-6 flex justify-center'
                        data-aos='fade-left'
                        data-aos-delay='400'
                    >
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full flex justify-center'>
                            <img
                                src={hero}
                                alt="Handika Chandra Pratama"
                                width={492}
                                height={783}
                                fetchPriority="high"
                                className='w-auto h-auto max-h-[60vh] lg:max-h-[75vh] object-contain transform hover:scale-105 transition-transform duration-500'/>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute -top-20 -left-20 w-40 h-40
                               sm:w-64 sm:h-64
                               bg-orange-400 dark:bg-orange-500
                               opacity-20 dark:opacity-10
                               rounded-full
                               mix-blend-multiply blur-3xl
                               animate-pulse hidden sm:block"
                >
                </div>
            </section>
        </div>
    )
}

export default Hero
