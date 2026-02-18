import idn from '../assets/idn.png'
import jpn from '../assets/jpn.png'
import eng from '../assets/eng.png'

const Languages = () => {
    const languages = [
        {
            name: 'Indonesia',
            icon: idn,
        },
        {
            name: 'Japanese',
            icon: jpn,
        },
        {
            name: 'English',
            icon: eng,
        },
    ];

    return (
        <section
            id="languages"
            className="py-14 relative overflow-hidden bg-gray-50 dark:bg-gray-900"
        >
            <div className="py-14 relative overflow-hidden">
                <div className="container px-5 py-14 mx-auto">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-800 dark:text-white">
                            My <span
                            className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
                        >
                                    Languages
                                </span>
                        </h1>
                        <p
                            className="text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300"
                        >
                            Languages I actively use and continue to develop.
                        </p>
                    </div>

                    <div
                        className="flex flex-wrap -m-4 justify-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {languages.map((language, index) => (
                            <div
                                key={index}
                                className="p-4 lg:w-1/4 md:w-1/2 w-full"
                                data-aos="fade-up"
                                data-aos-delay={`${300 + index * 100}`}
                            >
                                <div
                                    className="h-full p-6 rounded-2xl border transition-all duration-300
                                                hover:border-orange-500/50 hover:-translate-y-2 group
                                                hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]
                                                bg-gradient-to-br from-white to-gray-100 border-gray-200
                                                dark:from-gray-800 dark:to-gray-900 dark:border-gray-700"
                                >
                                    <div className="flex items-center">
                                        <div className="w-16 h-16 rounded-xl p-3 flex items-center justify-center
                                                          group-hover:scale-110 transition-transform duration-300
                                                          bg-gradient-to-br from-gray-100 to-gray-200
                                                          dark:from-gray-700 dark:to-gray-800"
                                        >
                                            <img
                                                src={language.icon}
                                                alt={language.name}
                                                className='w-full h-full object-contain'
                                            />
                                        </div>
                                        <h3
                                            className="text-xl font-bold ml-4 text-gray-800 dark:text-white"
                                        >
                                            {language.name}
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

export default Languages;