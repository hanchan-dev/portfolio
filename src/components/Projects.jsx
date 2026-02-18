import {FaExternalLinkAlt, FaGithub} from "react-icons/fa"
import myDiary from "../assets/my-diary.jpeg"
import vizclesn from "../assets/vizclean.png"
import cinemaweb from "../assets/cinemaweb.png"
import atm from "../assets/atm.png"
import contactManagement from "../assets/laravel.png"

const Projects = ({darkMode}) => {
    const projects = [
        {
            id: 1,
            title: "Diary Mobile App",
            desc: "Diary App - a personal journaling platform for documenting everyday thoughts and capturing moments through photos.",
            image: myDiary,
            tags: ["Java", "Firebase", "Android Studio", "Canva"],
            link: "https://github.com/hanchan-dev/Diary-App-Mobile"
        },
        {
            id: 2,
            title: "VizClean",
            desc: "VizClean - a Python-based desktop application built with Tkinter that streamlines data cleaning, visualization, and supervised machine learning through an intuitive graphical interface.",
            image: vizclesn,
            tags: ["Python", "Pandas"],
            link: "https://github.com/hanchan-dev/vizclean/tree/classification"
        },
        {
            id: 3,
            title: "Contact Management",
            desc: "A RESTful API built with Laravel for managing contact data, with simple CRUD operations, structured routing.",
            image: contactManagement,
            tags: ["Laravel", "MySQL"],
            link: "https://github.com/hanchan-dev/laravel-contact-management-api"
        },
        {
            id: 4,
            title: "Cinema Booking Web",
            desc: "A web-based cinema ticket booking simulation built with native PHP. Allows users to choose exist movies, select seats, and simulate ticket reservations through a dynamic interface with payment integration.",
            image: cinemaweb,
            tags: ["PHP", "MySQL", "Midtrans", "HTML", "CSS", "JS Native"],
            link: "https://github.com/hanchan-dev/cinema-booking-web"
        },
        {
            id: 5,
            title: "ATM Simulation",
            desc: "A console-based ATM system simulation developed in C. Implements core banking operations such as balance checking, withdrawals, deposits, and transaction flow logic.",
            image: atm,
            tags: ["C"],
            link: "https://github.com/hanchan-dev/ATM-Simulation_Project"
        },

    ];
    return (
        <section
            id='projects'
            style={{backgroundColor: darkMode ? '#111827' : '#f9fafb'}}
            className='relative py-24'
        >
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10' data-aos='fade-up'>
                    <h2
                        className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{color: darkMode ? 'white' : '#1f2937'}}
                    >
                        My <span
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                                Projects
                            </span>
                    </h2>
                    <p
                        className='max-w-xl mx-auto text-lg lg:text-2xl max-w-3xl leading-relaxed'
                        style={{color: darkMode ? '#d1d5db' : '#6b7280'}}
                    >
                        A showcase of my project i have built
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right, #1f2937, #111827)'
                                    : 'linear-gradient(to right, #ffffff, #f3f4f6)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border transition-all duration-300 hover:border-orange-500/50
             flex flex-col h-full'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}
                        >
                            <div className='h-40 overflow-hidden rounded-t-xl'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>

                            <div className='p-4 flex flex-col h-full'>
                                <h3
                                    className='text-lg font-bold mb-2'
                                    style={{color: darkMode ? 'white' : '#1f2937'}}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className='text-sm mb-3'
                                    style={{color: darkMode ? '#d1d5db' : '#6b7280'}}
                                >
                                    {project.desc}
                                </p>

                                <div className='mt-auto'>
                                    <div className='flex flex-wrap gap-1.5 mb-4'>
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                    color: darkMode ? '#d1d5db' : '#4b5563'
                                                }}
                                                className='px-2 py-1 text-xs rounded-full'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Repo */}
                                    <div className='flex gap-2'>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#d1d5db',
                                                color: darkMode ? '#ffffff' : '#111827'
                                            }}
                                            className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                            data-aos='zoom-in'
                                            data-aos-delay='300'
                                        >
                                            <FaGithub className='text-sm'/>
                                            <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All Project */}
                <div className='text-center mt-10'>
                    <a
                        href='https://github.com/hanchan-dev'
                        target="_blank"
                        style={{background: 'linear-gradient(to right, #f97316, #f59e0b)',}}
                        className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full
                                    hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                        data-aos='zoom-in'
                        data-aos-delay='400'
                    >
                        <FaGithub/>
                        <span>View All Projects</span>
                        <FaExternalLinkAlt className='text-sm'/>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Projects
