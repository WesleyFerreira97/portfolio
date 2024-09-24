import React from 'react'
import S from "./styles.module.css"
import { Container } from '@/components/Layout/Container'
import { Pencil } from '@phosphor-icons/react'
import { Typography } from '@/components/Ui/Typography'

type CardArticlesProps = {
    cardTitle: string;
    description: string;
    tags: string[];
}

const CardArticles = (props: CardArticlesProps) => {
    return (
        <div className={S.cardArticlesWrap}>
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
    const categoriesOptions = [
        { value: "javascript", label: "Javascript", link: "javascript" },
        { value: "typescript", label: "Typescript", link: "typescript" },
        { value: "front-end", label: "Front-end", link: "front-end" },
        { value: "react", label: "React", link: "react" },
        { value: "android", label: "Android Nativo", link: "android" },
    ]
    return (
        <Container>
            <Container.Inner>
                <div className={S.sectionHeader}>
                    <Typography
                        as='h3'
                        size='lg'
                        style={{
                            type: "heading",
                            color: "secondary",
                            weight: "bold",
                            className: 'my-9'
                        }}>
                        Articles
                    </Typography>
                    <ul className="flex [&>*]:px-4 [&>*]:py-3">
                        {categoriesOptions.map((value, index) => (
                            <Typography
                                key={index}
                                as='li'
                                size='md'
                                style={{
                                    type: "text",
                                    color: "secondary",
                                    weight: "bold",
                                    className: "hover:text-primary cursor-pointer"
                                }}
                            >
                                {value.label}
                            </Typography>
                        ))}
                    </ul>
                </div>
                <div className='mb-20 flex justify-center gap-3 flex-wrap'>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
                        <div
                            key={index}
                            className='bg-primary'
                        >
                            <CardArticles
                                cardTitle='Closures em Javascript'
                                description='Entenda um dos conceitos base do javascript'
                                tags={["Javascript"]}
                            />
                        </div>
                    ))}

                </div>
            </Container.Inner>
        </Container>
    )
}
