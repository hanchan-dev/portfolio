import about from "../../assets/images/about.webp"

const About = () => {
    return (
        <section id="about" className="min-h-screen scroll-mt-20 flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className="flex flex-wrap justify-center gap-4 relative order-1 lg:order-1"
                >
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96 mr-4 mb-4 lg:mr-6 lg:mb-6">
                        {/* Frame offset (tanpa data-aos supaya posisi offset tidak ditimpa transform AOS) */}
                        <div
                            className="absolute top-4 left-4 lg:top-6 lg:left-6 w-full h-full rounded-3xl
                                       bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600
                                       shadow-[0_0_60px_rgba(249,115,22,0.55)]"
                        />
                        <img
                            src={about}
                            alt="About Handika"
                            loading="lazy"
                            className='relative w-full h-full object-cover z-10 rounded-3xl shadow-2xl'
                            data-aos='zoom-in'
                            data-aos-delay='400'
                        />
                    </div>
                </figure>
                <article
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='text-center lg:text-left relative order-2 lg:order-2 mt-10 lg:mt-0'
                >
                    <header>
                        <h2
                            className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text'
                            data-aos='fade-up'
                            data-aos-delay='400'
                        >
                            About Me
                        </h2>
                    </header>
                    <p
                        className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed
                                   bg-gradient-to-r from-orange-900/10 to-orange-900/5
                                   p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
                                   text-gray-700 dark:text-gray-300"
                        data-aos='fade-up'
                        data-aos-delay='500'
                    >
                        I’m a software engineer focused on backend development, system architecture, 
                        and database design. My main stack is Java and Spring Boot, with Laravel 
                        for full-stack work. I’m currently deepening my skills in microservices, 
                        Docker, and Redis to build more resilient, distributed systems.
                        <br/><br/>
                        I’m proficient in Japanese (JLPT N2) and English, and I enjoy working across 
                        languages and cultures, especially in Japan-related projects.
                        <br/><br/>
                        I’m open to collaboration, project opportunities, and knowledge exchange. 
                        Feel free to reach out if you’d like to build something together or just talk tech.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About