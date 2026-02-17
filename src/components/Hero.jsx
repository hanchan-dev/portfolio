import React from "react"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import youtube from "../assets/youtube.png"
import cv from "../assets/CV.pdf"
import hero1 from "../assets/hero1.png"
import hi from "../assets/hi.png"
import {DownloadIcon} from "lucide-react";

const Hero = ({darkMode}) => {
    const socialIcons = [
        {icon: instagram, alt:"Instagram", link: "https://www.instagram.com/handikaacp/"},
        {icon: linkedin, alt:"Linkedin", link: "https://www.linkedin.com/in/handika-chandra-pratama-51a5aa352/"},
        {icon: github, alt:"Github", link: "https://github.com/hanchan-dev"},
        {icon: youtube, alt:"Youtube", link: "https://youtube.com/@handikachandrapratama4319?si=Rdz1-rmtji5L4LBp"},
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
        decorativeCircle: 'bg-orange-500 opacity-10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary:'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-orange-400 opacity-20',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <section
            id='home'
            data-aos-delay='250'
            className='body-font z-10'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-20 flex-col-reverse lg:flex-row items-center justify-between lg:mt-0 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'
                             data-aos='fade-down'
                             data-aos-delay='400'>
                            {socialIcons.map((social, index) => (
                                <a
                                key={index}
                                href={social.link}
                                target='_blank'
                                data-aos-delay={`${400 + index * 100}`}
                                className='transform hover:scale-110 transition-transform duration-300'>
                                    <img
                                    src={social.icon}
                                    alt={social.alt}
                                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain 
                                    ${darkMode ? '' : 'filter brightness-75'}`}/>
                                </a>
                            ))}
                        </div>
                        <h1
                            className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay='500'>

                                Holla, mi nombre Handika
                        </h1>
                        <p
                        className={`mb-1 sm:mb-2 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                        data-aos='fade-up'
                        data-aos-delay='600'>
                            I build scalable and maintainable web systems with a strong focus on backend architecture and long-term performance. Passionate about designing reliable foundations that grow with real-world demands.
                        </p>

                        {/* CV Download Button */}
                        <div className='w-full pt-4 sm:pt-6'>
                            <div
                                className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'>
                                <a href={cv} download className='w-full sm:w-auto'>
                                    <button
                                        className='w-full sm:w-auto inline-flex items-center justify-center text-white
                                                    bg-linear-to-r from-orange-500 to-amber-500 border-0
                                                    py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                                    rounded-full text-base sm:text-lg font-semibold transition-all
                                                    duration-300 transform'>
                                        <DownloadIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                                        Download CV
                                    </button>
                                </a>

                                {/* Sourcecode Download Button (optional)*/}
                                <a href="#" download className='w-full sm:w-auto'>
                                    <button
                                        className={`w-full sm:w-auto inline-flex ${theme.buttonSecondary} items-center justify-center
                                                    border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                                    rounded-full text-base sm:text-lg font-semibold transition-all
                                                    duration-300 transform`}>
                                        <DownloadIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                                        Download Sourcecode
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* My Image */}
                    <div
                        className='lg:w-1/2 w-90 max-w-md lg:max-w-lg mt-0 mb-6 lg:mt-0 flex justify-center'
                        data-aos='fade-left'
                        data-aos-delay='400'
                    >
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                            <div className='relative overflow-hidden'>
                                <img
                                    src={hero1} alt="Hero Image"
                                    className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500'/>
                            </div>
                            <img
                                src={hi}
                                alt="Hi Icon"
                                className='absolute -top-4 sm:top-4 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10'
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`absolute -top-20 -left-20 w-40 h-40
                              sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full
                              mix-blend-multiply filter blur-3xl opacity-10
                              animate-pulse delay-1000 hidden sm:block`}>
                </div>
            </section>
        </div>
    );
};

export default Hero