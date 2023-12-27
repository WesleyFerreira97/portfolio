import { Card, CardProps } from '@/components/Card';
import { Pencil } from '@phosphor-icons/react';
import { FrontEndProjects } from '../FrontEndProjects';

const SkillsData = {
    frontEnd: {
        title: "Front-End",
        description: "Conhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas te todas tecnologias WebConhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas tecnologias Web",
        icon: Pencil,
        pageComponent: (props: any) => <FrontEndProjects {...props} />,
    },
    mobile: {
        title: "Mobile",
        description: "Conhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas te todas tecnologias WebConhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas tecnologias Web",
        icon: Pencil,
        pageComponent: (props: CardProps) => <Card title='Mobile' />,
    },
    designer: {
        title: "Designer",
        description: "Conhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas te todas tecnologias WebConhecimento aprofundado em JavaScript, React JS/Native e facilidade de adaptação a todas tecnologias Web",
        icon: Pencil,
        pageComponent: (props: CardProps) => <Card title='Designer' />,
    }
}


export { SkillsData }