import {socials} from "../../data/socials.js"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className="border-t border-gray-300 dark:border-gray-700
               bg-gradient-to-b from-gray-100 to-gray-200
               dark:from-black dark:to-gray-900"
        >
            <div className="container mx-auto px-4 py-8 lg:p-8">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
                            Portfolio
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Full Stack Backend Heavy Developer
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className='flex gap-4'>
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
                                        loading="lazy"
                                        className="w-8 h-8 object-contain brightness-75 dark:brightness-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center lg:text-right">
                        <p className="text-sm flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400">
                            © {currentYear} Made with 愛
                            by{" "}
                            <a
                                href={socials[2].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-xl text-[#f97316] hover:underline"
                                >
                                Hanchan
                                </a>
                        </p>
                    </div>
                </div>  
            </div>
        </footer>
    )
}

export default Footer
