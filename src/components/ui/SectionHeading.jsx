const SectionHeading = ({prefix = "My", highlight, subtitle}) => {
    return (
        <div className="text-center mb-10 lg:mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 dark:text-white">
                {prefix}{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    {highlight}
                </span>
            </h2>
            {subtitle && (
                <p className="mx-auto text-lg lg:text-2xl max-w-3xl leading-relaxed text-gray-500 dark:text-gray-300">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeading
