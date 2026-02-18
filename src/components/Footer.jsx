import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialIcons = [
        {icon: instagram, alt:"Instagram", link: "https://www.instagram.com/handikaacp/"},
        {icon: linkedin, alt:"Linkedin", link: "https://www.linkedin.com/in/handika-chandra-pratama-51a5aa352/"},
        {icon: github, alt:"Github", link: "https://github.com/hanchan-dev"},
        {icon: youtube, alt:"Youtube", link: "https://youtube.com/@handikachandrapratama4319?si=Rdz1-rmtji5L4LBp"},
    ];
    return (
        <footer
            className="border-t border-gray-300 dark:border-gray-700
               bg-gradient-to-b from-gray-100 to-gray-200
               dark:from-black dark:to-gray-900"
        >
        <div className="container mx-auto px-4 py-8 lg:p-8">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3
                            className="text-2xl font-bold mb-2 text-orange-500 dark:text-white"
                        >
                            Portfolio
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Full Stack Backend Heavy Developer
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-center items-center">
                        <div className='flex gap-4'>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target='_blank'
                                    className='transform hover:scale-110 transition-transform duration-300'>
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain brightness-75 dark:brightness-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-sm flex items-center justify-center lg:justify-end gap-1 text-gray-500 dark:text-gray-400">
                            © {currentYear} Made with 愛
                            by{" "}
                            <span className="text-[#f97316]">
                              Hanchan
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;