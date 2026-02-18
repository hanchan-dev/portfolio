import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);


    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <div className="min-h-screen
                    bg-gradient-to-br from-gray-50 to-blue-50
                    dark:from-gray-900 dark:via-[#0d182e] dark:to-gray-900
        ">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App