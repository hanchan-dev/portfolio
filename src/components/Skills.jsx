import html_css_js from '../assets/html_css_js.png'
import tailwind from '../assets/tailwind.png'
import laravel from '../assets/laravel.png'
import java from '../assets/java.png'
import spring from '../assets/spring.png'
import python from '../assets/python.png'
import mysql from '../assets/mysql.png'

const Skills = ({ darkMode }) => {
    const skills = [
        {
            name: 'HTML, CSS, JS Native',
            icon: html_css_js,
        },
        {
            name: 'Tailwind CSS',
            icon: tailwind,
        },
        {
            name: 'Laravel',
            icon: laravel,
        },
        {
            name: 'MySQL',
            icon: mysql,
        },
        {
            name: 'Java',
            icon: java,
        },
        {
            name: 'Spring',
            icon: spring,
        },
        {
            name: 'Python',
            icon: python,
        }
    ];

    return (
        <section
            id="skills"
            style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb"}}
            className="py-14 relative overflow-hidden"
        >
            <div className="py-14 relative overflow-hidden">
                <div className="container px-5 py-14 mx-auto">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h1
                            className="sm:text-4xl text-3xl font-bold title-font mb-4"
                            style={{color: darkMode ? "white" : "#1f2937"}}
                        >
                            My <span
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                BackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                                Skills
                            </span>
                        </h1>
                        <p
                            className={`text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed 
                            ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                            The technologies and stack I currently work with.
                        </p>
                    </div>

                    <div
                        className="flex flex-wrap -m-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="p-4 lg:w-1/4 md:w-1/2 w-full"
                                data-aos="fade-up"
                                data-aos-delay={`${300 + index * 100}`}
                            >
                                <div
                                    style={{
                                        background: darkMode
                                            ? "linear-gradient(to bottom right, #1f2937, #111827)"
                                            : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                                        borderColor: darkMode ? "#374151" : "#e5e7eb"
                                    }}
                                    className="h-full p-6 rounded-2xl border
                                              hover:border-orange-500/50 transition-all duration-300
                                              hover:-translate-y-2 group
                                              hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]"
                                >
                                    <div className="flex items-center">
                                        <div
                                            style={{
                                                background: darkMode
                                                    ? "linear-gradient(to bottom right, #374151, #1f2937)"
                                                    : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                                            }}
                                            className="w-16 h-16 rounded-xl p-3 flex items-center justify-center
                                                        group-hover:scale-110 transition-transform duration-300"
                                        >
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className='w-full h-full object-contain'
                                            />
                                        </div>
                                        <h3
                                            className={`text-xl font-bold ml-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                                        >
                                            {skill.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;