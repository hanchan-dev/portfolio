import {useEffect, useRef, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {ChevronDownIcon, DownloadIcon} from "lucide-react"
import {cvOptions} from "../../data/cv.js"

const CvDownloadButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef(null)

    // tutup dropdown saat klik di luar atau tekan Esc
    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (e) => {
            if (!wrapperRef.current?.contains(e.target)) setIsOpen(false)
        }
        const handleEscape = (e) => {
            if (e.key === "Escape") setIsOpen(false)
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEscape)
        }
    }, [isOpen])

    return (
        <div ref={wrapperRef} className="relative w-full sm:w-auto">
            <button
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                className="w-full sm:w-auto inline-flex items-center justify-center text-white
                           bg-gradient-to-r from-orange-500 to-amber-500 border-0
                           py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                           rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
            >
                <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2"/>
                Download CV
                <ChevronDownIcon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        role="menu"
                        initial={{opacity: 0, y: -8}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -8}}
                        transition={{duration: 0.2}}
                        className="absolute left-0 right-0 sm:right-auto sm:min-w-64 top-full mt-2 z-30
                                   p-2 rounded-2xl shadow-xl border
                                   bg-white dark:bg-gray-800
                                   border-gray-200 dark:border-gray-700"
                    >
                        {cvOptions.map(cv => (
                            <li key={cv.code} role="none">
                                {cv.available ? (
                                    <a
                                        role="menuitem"
                                        href={cv.href}
                                        download={cv.fileName}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                                                   text-gray-800 dark:text-white
                                                   hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <img src={cv.flag} alt="" className="w-6 h-6 object-contain"/>
                                        <span className="font-medium">{cv.label}</span>
                                        <DownloadIcon className="w-4 h-4 ml-auto text-orange-500"/>
                                    </a>
                                ) : (
                                    <span
                                        role="menuitem"
                                        aria-disabled="true"
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                                                   text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                    >
                                        <img src={cv.flag} alt="" className="w-6 h-6 object-contain opacity-50"/>
                                        <span className="font-medium">{cv.label}</span>
                                        <span className="ml-auto text-[10px] uppercase tracking-wider font-semibold
                                                         px-2 py-0.5 rounded-full
                                                         bg-gray-100 dark:bg-gray-700">
                                            Coming soon
                                        </span>
                                    </span>
                                )}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CvDownloadButton
