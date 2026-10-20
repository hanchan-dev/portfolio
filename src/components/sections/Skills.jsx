import Section from "../ui/Section.jsx"
import SectionHeading from "../ui/SectionHeading.jsx"
import IconCardGrid from "../ui/IconCardGrid.jsx"
import {skills} from "../../data/skills.js"

const Skills = () => {
    return (
        <Section id="skills" className="bg-gray-50 dark:bg-gray-900">
            <SectionHeading
                highlight="Skills"
                subtitle="The technologies and stack I currently work with."
            />
            <IconCardGrid items={skills}/>
        </Section>
    )
}

export default Skills
