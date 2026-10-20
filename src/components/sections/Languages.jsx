import Section from "../ui/Section.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"
import IconCardGrid from "../ui/IconCardGrid.jsx"
import {languages} from "../../data/languages.js"

const Languages = () => {
    return (
        <Section id="languages" className="bg-gray-50 dark:bg-gray-900">
            <SectionHeading
                highlight="Languages"
                subtitle="Languages I actively use and continue to develop."
            />
            <IconCardGrid items={languages}/>
        </Section>
    )
}

export default Languages
