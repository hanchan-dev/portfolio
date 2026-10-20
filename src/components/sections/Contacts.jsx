import {MailIcon, MapPinIcon, CopyIcon, CheckIcon} from "lucide-react"
import {useEffect, useRef, useState} from "react"
import Section from "../ui/Section.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"
import {email, socials} from "../../data/socials.js"

const Contact = () => {
    const [copied, setCopied] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => () => clearTimeout(timeoutRef.current), [])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email)
        } catch {
            // clipboard tidak tersedia (bukan https / ditolak browser) → buka email client saja
            window.location.href = `mailto:${email}`
            return
        }
        setCopied(true)
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Section
            id="contacts"
            className="bg-white dark:bg-gray-950 overflow-hidden"
            decoration={
                // Background Blobs
                <>
                    <div className="absolute -top-20 -right-20 w-64 h-64
                                    bg-orange-400 dark:bg-orange-500
                                    opacity-10 rounded-full blur-3xl pointer-events-none"/>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64
                                    bg-amber-400 dark:bg-amber-500
                                    opacity-10 rounded-full blur-3xl pointer-events-none"/>
                </>
            }
        >
            {/* Toast Notification */}
            <div
                role="status"
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                            flex items-center gap-2 px-5 py-3 rounded-full shadow-lg
                            bg-gray-900 dark:bg-white
                            text-white dark:text-gray-900
                            text-sm font-medium transition-all duration-300
                            ${copied
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
                <CheckIcon className="w-4 h-4 text-orange-500"/>
                Email copied to clipboard!
            </div>

            <SectionHeading
                prefix="Get In"
                highlight="Touch"
                subtitle="Feel free to reach out for collaboration, opportunities, or just a friendly chat."
            />

            <div className="max-w-[50rem] mx-auto flex flex-col gap-6">

                {/* Email + Location — side by side on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Email Card */}
                    <div
                        className="group p-8 rounded-2xl border
                                   border-gray-200 dark:border-gray-700
                                   bg-gradient-to-br from-white to-gray-100
                                   dark:from-gray-800 dark:to-gray-900
                                   hover:border-orange-500/50 hover:-translate-y-1
                                   hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]
                                   transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                            bg-gradient-to-br from-orange-500 to-amber-500
                                            group-hover:scale-110 transition-transform duration-300">
                                <MailIcon className="w-6 h-6 text-white"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Email</h3>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Best way to reach me. I usually respond within 24 hours.
                        </p>
                        <div className="flex items-center gap-2 lg:justify-between">
                            <a
                                href={`mailto:${email}`}
                                className="text-orange-500 hover:text-orange-600
                                           dark:text-orange-400 dark:hover:text-orange-300
                                           font-semibold transition-colors duration-300 break-all"
                            >
                                {email}
                            </a>
                            <button
                                type="button"
                                onClick={handleCopy}
                                aria-label="Copy email address"
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium shrink-0
                                           bg-gray-100 dark:bg-gray-700
                                           text-gray-600 dark:text-gray-300
                                           hover:bg-orange-500 hover:text-white
                                           transition-all duration-300"
                            >
                                {copied ? (
                                    <>
                                        <CheckIcon className="w-3.5 h-3.5"/>
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <CopyIcon className="w-3.5 h-3.5"/>
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div
                        className="group p-8 rounded-2xl border
                                   border-gray-200 dark:border-gray-700
                                   bg-gradient-to-br from-white to-gray-100
                                   dark:from-gray-800 dark:to-gray-900
                                   hover:border-orange-500/50 hover:-translate-y-1
                                   hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]
                                   transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                            bg-gradient-to-br from-orange-500 to-amber-500
                                            group-hover:scale-110 transition-transform duration-300">
                                <MapPinIcon className="w-6 h-6 text-white"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Location</h3>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Based here, open to remote collaboration worldwide.
                        </p>
                        <p className="font-semibold text-orange-500 dark:text-orange-400">
                            Purwakarta or Bandung, West Java, Indonesia 🇮🇩
                        </p>
                    </div>
                </div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socials.map((social, index) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-2xl border
                                       border-gray-200 dark:border-gray-700
                                       bg-gradient-to-br from-white to-gray-100
                                       dark:from-gray-800 dark:to-gray-900
                                       hover:border-orange-500/50
                                       hover:shadow-[0_0_20px_rgb(255,165,0,0.1)]
                                       hover:-translate-y-1
                                       transition-all duration-300 group"
                            data-aos="fade-up"
                            data-aos-delay={300 + index * 80}
                        >
                            <div className="w-10 h-10 rounded-xl p-2 flex items-center justify-center shrink-0
                                            bg-gradient-to-br from-gray-100 to-gray-200
                                            dark:from-gray-700 dark:to-gray-800
                                            group-hover:scale-110 transition-transform duration-300">
                                <img
                                    src={social.icon}
                                    alt=""
                                    className="w-full h-full object-contain brightness-75 dark:brightness-100"
                                />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium mb-0.5">
                                    {social.name}
                                </p>
                                <p className="text-sm font-semibold text-gray-800 dark:text-white
                                              group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                    {social.label}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </Section>
    )
}

export default Contact
