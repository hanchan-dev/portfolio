import sid from "../assets/images/sid.webp"
import myDiary from "../assets/images/my-diary.webp"
import vizclean from "../assets/images/vizclean.webp"
import contactManagement from "../assets/icons/laravel.png"
import cinemaweb from "../assets/images/cinemaweb.webp"
import atm from "../assets/images/atm.webp"

export const projects = [
    {
        id: 0,
        title: "SIDUTama",
        desc: "SIDUTama: a village information system built with Laravel and React that digitizes letter requests with multi-level approvals and PDF generation, population data management, and public village information for Desa Cibenda.",
        image: sid,
        tags: ["Laravel", "React", "Tailwind", "PostgreSQL"],
        link: "https://github.com/Vextronode/sid-app",
    },
    {
        id: 1,
        title: "Diary Mobile App",
        desc: "Diary App: a personal journaling platform for documenting everyday thoughts and capturing moments through photos.",
        image: myDiary,
        tags: ["Java", "Firebase", "Android Studio", "Canva"],
        link: "https://github.com/hanchan-dev/Diary-App-Mobile",
    },
    {
        id: 2,
        title: "VizClean",
        desc: "VizClean: a Python-based desktop application built with Tkinter that streamlines data cleaning, visualization, and supervised machine learning through an intuitive graphical interface.",
        image: vizclean,
        tags: ["Python", "Pandas"],
        link: "https://github.com/hanchan-dev/vizclean/tree/classification",
    },
    {
        id: 3,
        title: "Contact Management",
        desc: "A RESTful API built with Laravel for managing contact data, with simple CRUD operations and structured routing.",
        image: contactManagement,
        tags: ["Laravel", "MySQL"],
        link: "https://github.com/hanchan-dev/laravel-contact-management-api",
    },
    {
        id: 4,
        title: "Cinema Booking Web",
        desc: "A web-based cinema ticket booking simulation built with native PHP. Allows users to choose existing movies, select seats, and simulate ticket reservations through a dynamic interface with payment integration.",
        image: cinemaweb,
        tags: ["PHP", "MySQL", "Midtrans", "HTML", "CSS", "JS Native"],
        link: "https://github.com/hanchan-dev/cinema-booking-web",
    },
    {
        id: 5,
        title: "ATM Simulation",
        desc: "A console-based ATM system simulation developed in C. Implements core banking operations such as balance checking, withdrawals, deposits, and transaction flow logic.",
        image: atm,
        tags: ["C"],
        link: "https://github.com/hanchan-dev/ATM-Simulation_Project",
    },
]
