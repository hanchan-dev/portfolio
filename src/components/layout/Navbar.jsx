import {useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {Moon, Sun, X, Menu} from "lucide-react"
import useActiveSection from "../../hooks/useActiveSection.js"

const navItems = [
    {name: 'Home', id: 'home'},
    {name: 'About', id: 'about'},
    {name: 'Skills', id: 'skills'},
    {name: 'Languages', id: 'languages'},
    {name: 'Projects', id: 'projects'},
    {name: 'Achievements', id: 'achievements'},
    {name: 'Contacts', id: 'contacts'},
]

const sectionIds = navItems.map(item => item.id)

const Navbar = ({darkMode, toggleDarkMode}) => {
    const [activeSection, setActiveSection] = useActiveSection(sectionIds)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavClick = (id) => {
        setActiveSection(id)
        setIsMenuOpen(false)
    }

    return (
        <div className="flex justify-center w-full fixed z-50 mt-4">
            <motion.nav
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{duration: 0.5}}
                className="flex items-center justify-center
                           bg-gradient-to-br from-orange-200 to-white
                           dark:from-gray-700 dark:to-black
                           backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg"
            >
                <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
                    {/* logo */}
                    <motion.a
                        href={import.meta.env.BASE_URL}
                        whileHover={{scale: 1.05}}
                        className="flex items-center space-x-2">

                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            Portfolio<span className="text-orange-500">.</span>
                        </span>
                    </motion.a>

                    {/* Navigation Items */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => handleNavClick(item.id)}
                                aria-current={activeSection === item.id ? "page" : undefined}
                                className="relative">
                                <motion.span
                                    className={`font-medium transition-colors duration-300
                                                ${activeSection === item.id
                                        ? "text-orange-600 dark:text-orange-400"
                                        : "text-gray-800 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                                    }`}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}>
                                    {item.name}
                                </motion.span>
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5
                                                   bg-gradient-to-r from-orange-500 to-amber-500
                                                   rounded-full"
                                    >
                                    </motion.div>
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center space-x-2">

                        {/* DarkMode Toggle */}
                        <motion.button
                            type="button"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full
                                       bg-gray-200 dark:bg-gray-700
                                       transition-colors"
                            aria-label={darkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                            }>
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-300"/>
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700"/>
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center space-x-4 px-2">
                        <motion.button
                            type="button"
                            whileTap={{scale: 0.9}}
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5 text-gray-700 dark:text-white"/>
                            ) : (
                                <Menu className="w-5 h-5 text-gray-700 dark:text-white"/>
                            )}
                        </motion.button>
                    </div>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.3}}
                            className="absolute top-full left-0 right-0 mt-2 lg:hidden overflow-hidden
                                       bg-white/95 dark:bg-gray-900/95
                                       backdrop-blur-lg rounded-xl shadow-lg border
                                       border-gray-200 dark:border-gray-700"
                        >
                            <div className="px-4 py-3 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => handleNavClick(item.id)}
                                        className="block">

                                        <motion.div
                                            whileHover={{x: 5}}
                                            className={`py-3 px-4 rounded-lg text-center
                                            ${activeSection === item.id
                                                ? "bg-orange-50 dark:bg-gray-800"
                                                : ""
                                            }`}>
                                            <span
                                                className={`font-medium
                                                    ${activeSection === item.id
                                                    ? "text-orange-600 dark:text-orange-400"
                                                    : "text-gray-800 dark:text-gray-300"
                                                }
                                            `}>
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    )
}

export default Navbar
