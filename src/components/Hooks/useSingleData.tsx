import { frontEndProjectsData, ProjectDataProps } from "@/data/frontEndProjects";
import { createContext, useContext, useState } from "react";
import { SingleProjectProps } from "../Singles/SingleProject";

type ProjectProps = {
    dataSingle: SingleProjectProps;
    setDataSingle: (dataSingle: SingleProjectProps) => void
}

const data = frontEndProjectsData[0].singleData

const defaultValues: SingleProjectProps = {
    article: data.article,
    articleTitle: data.articleTitle,
    description: frontEndProjectsData[0].description,
    gallery: data.gallery,
    links: data.links,
    mainTitle: data.mainTitle
}

const initialValue = {
    dataSingle: defaultValues,
    setDataSingle: () => { }
}

const SingleDataContext = createContext<ProjectProps>(initialValue)

const SingleDataProvider = ({ children }: { children: React.ReactNode }) => {
    const [dataSingle, setDataSingle] = useState(defaultValues)

    return (
        <SingleDataContext.Provider value={{ dataSingle, setDataSingle }}>
            {children}
        </SingleDataContext.Provider>
    )

}

const useSingleContext = () => {
    const { dataSingle, setDataSingle } = useContext(SingleDataContext)

    return { dataSingle, setDataSingle }
}

export { SingleDataContext, SingleDataProvider, useSingleContext }