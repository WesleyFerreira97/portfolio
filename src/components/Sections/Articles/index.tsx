import React from 'react'
import S from "./styles.module.css"
import { Container } from '@/components/Layout/Container'
import { Pencil } from '@phosphor-icons/react'

type CardArticlesProps = {
    cardTitle: string;
    description: string;
    tags: string[];
}

const CardArticles = (props: CardArticlesProps) => {
    return (
        <div>
            <div className={S.cardInfo}>
                <div className={S.cardIcon}>
                    <Pencil size={38} color="#fff" />
                </div>
                <h2 className={S.cardTitle}>
                    {props.cardTitle}
                </h2>
                <p className={S.cardDescription}>
                    {props.description}
                </p>
            </div>
            <div className={S.cardFooter}>
                <ul className={S.tagsList}>
                    {props.tags.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export function Articles() {
    return (
        <Container>
            <Container.Inner>
                <div className={S.sectionHeader}>
                    <h3 className={S.sectionTitle}>Articles</h3>
                    <ul className={S.postCategories}>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Front-end</li>
                        <li>Recact</li>
                        <li>Android Nativo</li>
                    </ul>
                </div>
            </Container.Inner>
        </Container>
    )
}
