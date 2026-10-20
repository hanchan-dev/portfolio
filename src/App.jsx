import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Languages from "./components/sections/Languages.jsx";
import Projects from "./components/sections/Projects.jsx";
import Achievements from "./components/sections/Achievements.jsx";
import Contacts from "./components/sections/Contacts.jsx";
import useDarkMode from "./hooks/useDarkMode.js";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    return (
        <div className="min-h-screen
                    bg-gradient-to-br from-gray-50 to-blue-50
                    dark:from-gray-900 dark:via-[#0d182e] dark:to-gray-900
        ">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Languages/>
                <Projects/>
                <Achievements/>
                <Contacts/>
            </main>
            <Footer/>
        </div>
    );
}

export default App
