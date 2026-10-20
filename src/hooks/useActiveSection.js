import {useEffect, useState} from "react"

// Scroll-spy: mengembalikan id section yang sedang berada di tengah viewport.
const useActiveSection = (ids) => {
    const [activeId, setActiveId] = useState(ids[0])
    const key = ids.join(",")

    useEffect(() => {
        const elements = key.split(",")
            .map(id => document.getElementById(id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveId(entry.target.id)
                })
            },
            // garis deteksi = area tipis di tengah layar
            {rootMargin: "-45% 0px -55% 0px"}
        )

        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [key])

    return [activeId, setActiveId]
}

export default useActiveSection
