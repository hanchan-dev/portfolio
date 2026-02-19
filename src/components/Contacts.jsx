import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import youtube from "../assets/youtube.png"
import { MailIcon, MapPinIcon, CopyIcon, CheckIcon } from "lucide-react"
import { useState } from "react"

const Contact = () => {
    const [copied, setCopied] = useState(false)

    const email = "handikacpratama@gmail.com"

    const socialLinks = [
        {
            icon: instagram,
            alt: "Instagram",
            link: "https://www.instagram.com/handikaacp/",
            label: "@handikaacp"
        },
        {
            icon: linkedin,
            alt: "LinkedIn",
            link: "https://www.linkedin.com/in/handika-chandra-pratama-51a5aa352/",
            label: "Handika Chandra Pratama"
        },
        {
            icon: github,
            alt: "GitHub",
            link: "https://github.com/hanchan-dev",
            label: "hanchan-dev"
        },
        {
            icon: youtube,
            alt: "YouTube",
            link: "https://youtube.com/@handikachandrapratama4319?si=Rdz1-rmtji5L4LBp",
            label: "Handika Chandra Pratama"
        },
    ]

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section
            id="contacts"
            className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden"
        >
            {/* Toast Notification */}
            <div
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
                <CheckIcon className="w-4 h-4 text-orange-500" />
                Email copied to clipboard!
            </div>

            {/* Background Blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64
                            bg-orange-400 dark:bg-orange-500
                            opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64
                            bg-amber-400 dark:bg-amber-500
                            opacity-10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Heading */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 dark:text-white">
                        Get In{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className="mx-auto text-lg lg:text-2xl max-w-2xl leading-relaxed text-gray-500 dark:text-gray-300">
                        Feel free to reach out for collaboration, opportunities, or just a friendly chat.
                    </p>
                </div>

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
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                                bg-gradient-to-br from-orange-500 to-amber-500
                                                group-hover:scale-110 transition-transform duration-300">
                                    <MailIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Email</h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Best way to reach me. I usually respond within 24 hours.
                            </p>
                            <div className="flex items-center gap-2 lg:justify-between">
                                <button
                                    onClick={handleCopy}
                                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600
                                               dark:text-orange-400 dark:hover:text-orange-300
                                               font-semibold transition-colors duration-300 break-all text-left"
                                >
                                    {email}
                                </button>
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium shrink-0
                                               bg-gray-100 dark:bg-gray-700
                                               text-gray-600 dark:text-gray-300
                                               hover:bg-orange-500 hover:text-white
                                               transition-all duration-300"
                                >
                                    {copied ? (
                                        <>
                                            <CheckIcon className="w-3.5 h-3.5" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <CopyIcon className="w-3.5 h-3.5" />
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
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                                bg-gradient-to-br from-orange-500 to-amber-500
                                                group-hover:scale-110 transition-transform duration-300">
                                    <MapPinIcon className="w-6 h-6 text-white" />
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
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
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
                                        alt={social.alt}
                                        className="w-full h-full object-contain brightness-75 dark:brightness-100"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium mb-0.5">
                                        {social.alt}
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
            </div>
        </section>
    )
}

export default Contact
