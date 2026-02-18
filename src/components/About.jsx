import about from "../assets/about.png"

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className="flex flex-wrap justify-center gap-4 relative order-1 lg:order-1"
                >
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                        {/* Image */}
                        <div
                            className="absolute -inset-8 lg:-inset-14 bg-gradient-to-l from-orange-500 via-orange-400 to-amber-500 rotate-12 diamond-shape"
                            data-aos='zoom-in'
                            data-aos-delay='400'>
                        </div>
                        <img
                            src={about}
                            alt="About Image"
                            className='absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300'
                            data-aos='zoom-in'
                            data-aos-delay='500'
                        />
                    </div>
                </figure>
                <article
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='text-center lg:text-left relative order-2 lg:order-2 mt-10 lg:mt-0'
                >
                    <header>
                        <h1
                            className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text'
                            data-aos='fade-up'
                            data-aos-delay='400'
                        >
                            About Me
                        </h1>
                    </header>
                    <p
                        className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed
                                   bg-gradient-to-r from-orange-900/10 to-orange-900/5
                                   p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
                                   text-gray-700 dark:text-gray-300"
                        data-aos='fade-up'
                        data-aos-delay='500'
                    >
                        I am Interested in web development, focused on backend and scalable system design. Fluent in
                        Japanese and English, enabling effective global collaboration.
                        <br/><br/>
                        I am open to collaboration, discussions, projects, opportunities related to technology,
                        language, and academic work. Feel free to connect with me for project collaboration, knowledge
                        exchange, or professional networking.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About