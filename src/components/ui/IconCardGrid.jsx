// Grid kartu ikon + nama, dipakai oleh section Skills dan Languages.
const IconCardGrid = ({items}) => {
    return (
        <div className="flex flex-wrap -m-4 justify-center">
            {items.map((item, index) => (
                <div
                    key={item.name}
                    className="p-4 lg:w-1/4 md:w-1/2 w-full"
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                >
                    <div
                        className="h-full p-6 rounded-2xl border transition-all duration-300
                                    hover:border-orange-500/50 hover:-translate-y-2 group
                                    hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]
                                    bg-gradient-to-br from-white to-gray-100 border-gray-200
                                    dark:from-gray-800 dark:to-gray-900 dark:border-gray-700"
                    >
                        <div className="flex items-center">
                            <div className="w-16 h-16 shrink-0 rounded-xl p-3 flex items-center justify-center
                                              group-hover:scale-110 transition-transform duration-300
                                              bg-gradient-to-br from-gray-100 to-gray-200
                                              dark:from-gray-700 dark:to-gray-800"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold ml-4 text-gray-800 dark:text-white">
                                {item.name}
                            </h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IconCardGrid
