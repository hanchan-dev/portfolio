import {FaExternalLinkAlt, FaGithub} from "react-icons/fa"
import jf_nasional from "../assets/jf_nasional.jpg"
import jf_provinsi from "../assets/jf_provinsi.jpg"
import winaction_25 from "../assets/winaction_25.jpg"
import winaction_24 from "../assets/winaction_24.jpg"
import bunkasai_24 from "../assets/bunkasai_24.jpg"
import agbji_22 from "../assets/agbji_2022.webp"
import n2 from "../assets/n2.jpeg"

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "National Finalist in Indonesian National Japanese Presentation Competition (University Division).",
            desc: "Selected as a National Finalist in the 4th Indonesian National Japanese Presentation Competition (University Division). Following the West Java regional round, this stage brought together selected representatives from across Indonesia.\n" +
                "Organized by The Japan Foundation, Jakarta, in collaboration with national higher education authorities and PERSADA, the competition marked my progression to the national level.",
            image: jf_nasional
        },
        {
            id: 2,
            title: "2nd Regional Japanese Presentation Competition",
            desc: "Awarded 2nd Place in the West Java Regional Japanese Presentation Competition (4th Edition). Organized in collaboration with the Embassy of Japan in Indonesia and the Faculty of Cultural Sciences, Universitas Padjadjaran,\n" +
                "this provincial-level competition brought together selected representatives across West Java.",
            image: jf_provinsi,
        },
        {
            id: 3,
            title: "1st Runner-Up in the Japanese Monogatari Competition in WINACTION",
            desc: "awarded 1st Runner-Up in the Japanese Monogatari Competition at the 6th WINACTION (Widyatama International Competition), organized by Universitas Widyatama.",
            image: winaction_25,
        },
        {
            id: 4,
            title: "3rd Place in Japanese Presentation Competition",
            desc: "awarded 3rd Place in Japanese Presentation Competition at the 49th Japanese Language and Culture Week (BUNKASAI), hosted by the Faculty of Cultural Sciences, Universitas Padjadjaran",
            image: bunkasai_24,
        },
        {
            id: 5,
            title: "1st Runner-Up in Japanese News Anchor Winaction",
            desc: "Awarded 1st Runner-Up in Japanese News Anchor at the 5th WINACTION (Widyatama International Competition), organized by Universitas Widyatama.",
            image: winaction_24,
        },
        {
            id: 6,
            title: "3rd Place - Nihongo Speech Contest AGBJI",
            desc: "Participated in Olimpiade Nihongo AGBJI 2022 (National Level) organized by The Association of Japanese Language Teachers of Indonesia (AGBJI) in collaboration with The Japan Foundation Jakarta, during my senior high school years",
            image: agbji_22,
        },
        {
            id: 7,
            title: "JLPT N2 Certified",
            desc: "Achieved JLPT N2 in 2024 after two years of independent study since High School. N1 is the next horizon ? of course",
            image: n2,
        },

    ];
    return (
        <section
            id='achievements'
            className='relative py-24 bg-gray-50 dark:bg-gray-900'
        >
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10' data-aos='fade-up'>
                    <h2
                        className='text-3xl sm:text-4xl font-bold mb-3 text-gray-800 dark:text-white'
                    >
                        My <span
                        className='bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'
                    >
                                Achievements
                            </span>
                    </h2>
                    <p
                        className='mx-auto text-lg lg:text-2xl max-w-3xl leading-relaxed text-gray-500 dark:text-gray-300'
                    >
                        A record of progress and competitive achievements
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
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
                            data-aos-delay={index * 100}
                        >
                            <div className='h-75 overflow-hidden rounded-t-xl'>
                                <img
                                    src={achievement.image}
                                    alt={achievement.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                            </div>

                            <div className='p-4'>
                                <h3
                                    className='text-lg font-bold mb-2 text-gray-800 dark:text-white'
                                >
                                    {achievement.title}
                                </h3>

                                <p
                                    className='text-sm mb-3 text-gray-500 dark:text-gray-300'
                                >
                                    {achievement.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements
