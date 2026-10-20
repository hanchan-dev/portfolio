// Wrapper standar untuk semua section konten, supaya jarak antar section konsisten.
const Section = ({id, className = "", decoration, children}) => {
    return (
        <section
            id={id}
            className={`relative py-16 lg:py-20 scroll-mt-20 ${className}`}
        >
            {decoration}
            <div className="container mx-auto px-4 relative z-10">
                {children}
            </div>
        </section>
    )
}

export default Section
