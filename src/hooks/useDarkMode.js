import {useEffect, useState} from "react"

const STORAGE_KEY = "theme"

// Nilai awal sudah dipasang oleh inline script di index.html (mencegah flash),
// jadi cukup baca class yang ada di <html>.
const getInitialDarkMode = () => document.documentElement.classList.contains("dark")

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(getInitialDarkMode)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)
        try {
            localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light")
        } catch {
            // localStorage bisa diblokir (private mode), abaikan saja
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(prev => !prev)

    return [darkMode, toggleDarkMode]
}

export default useDarkMode
