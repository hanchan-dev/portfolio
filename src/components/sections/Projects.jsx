import {FaExternalLinkAlt, FaGithub} from "react-icons/fa"
import Section from "../ui/Section.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"
import {projects} from "../../data/projects.js"

const Projects = () => {
    return (
        <Section id="projects" className="bg-gray-50 dark:bg-gray-900">
            <SectionHeading
                highlight="Projects"
                subtitle="A showcase of projects I have built"
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className='group flex flex-col rounded-xl border
                                   border-gray-200 dark:border-gray-700
                                   bg-gradient-to-r from-white to-gray-100
                                   dark:from-gray-800 dark:to-gray-900
                                   transition-all duration-300
                                   hover:border-orange-500/50 h-full'
                        data-aos='fade-up'
                        data-aos-delay={(index % 3) * 100}
                    >
                        <div className='h-50 overflow-hidden rounded-t-xl'>
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>

                        <div className='p-4 flex flex-col flex-1'>
                            <h3 className='text-lg font-bold mb-2 text-gray-800 dark:text-white'>
                                {project.title}
                            </h3>

                            <p className='text-sm mb-3 text-gray-500 dark:text-gray-300 text-justify'>
                                {project.desc}
                            </p>

                            <div className='mt-auto'>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='px-2 py-1 text-xs rounded-full
                                                       bg-gray-100 dark:bg-gray-700
                                                       text-gray-600 dark:text-gray-300'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Repo */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg
                                               bg-gray-300 dark:bg-gray-700
                                               text-gray-900 dark:text-white
                                               transition-all duration-300
                                               hover:shadow-lg hover:bg-orange-400 hover:shadow-orange-500/30 hover:-translate-y-0.5'
                                >
                                    <FaGithub className='text-sm'/>
                                    <span>Source Code</span>
                                </a>
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
                    rel="noopener noreferrer"
                    className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full
                               bg-gradient-to-r from-orange-500 to-amber-500
                               hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                    data-aos='zoom-in'
                >
                    <FaGithub/>
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm'/>
                </a>
            </div>
        </Section>
    )
}

export default Projects
