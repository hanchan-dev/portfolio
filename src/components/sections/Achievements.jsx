import Section from "../ui/Section.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"
import {achievements} from "../../data/achievements.js"

const Achievements = () => {
    return (
        <Section id="achievements" className="bg-gray-50 dark:bg-gray-900">
            <SectionHeading
                highlight="Achievements"
                subtitle="A record of progress and competitive achievements"
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {achievements.map((achievement, index) => (
                    <div
                        key={achievement.id}
                        className='group rounded-xl border
                                   border-gray-200 dark:border-gray-700
                                   bg-gradient-to-r from-white to-gray-100
                                   dark:from-gray-800 dark:to-gray-900
                                   transition-all duration-300
                                   hover:border-orange-500/50
                                   flex flex-col'
                        data-aos='fade-up'
                        data-aos-delay={(index % 3) * 100}
                    >
                        <div className='h-75 overflow-hidden rounded-t-xl'>
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                loading="lazy"
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>

                        <div className='p-4'>
                            <h3 className='text-lg font-bold mb-2 text-gray-800 dark:text-white'>
                                {achievement.title}
                            </h3>

                            <p className='text-sm mb-3 text-gray-500 dark:text-gray-300 text-justify whitespace-pre-line'>
                                {achievement.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Achievements
