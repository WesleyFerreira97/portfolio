import React from 'react';
import { PageContainer, ProjectPreview, PageText } from '../../style/componentsDefault';

interface AboutProps {
    bg: string;    
}

export function AboutMe(props: AboutProps) {
    const { bg } = props;
    
    return (
        <PageContainer>
            <ProjectPreview>
                <div className='project-preview__wrap'>
                    {/* <img src="https://user-images.githubusercontent.com/7539166/151867825-67f21ae1-5546-493b-9a4d-f0960ee54db7.png" alt="project preview" /> */}
                </div>
            </ProjectPreview>
            
            <PageText>
                <h1 className='page-text__title'>APP Administrativo</h1>
                <h2 className='page-text__subtitle'>React Native</h2>
                <p className='page-text__paragraph'>React Native runs on React, a popular open source library for building user interfaces with JavaScript. To make the most of React Native, it helps to understand React itself. This section can get you started or can serve as a refresher course.</p>
                <p className='page-text__paragraph'>We’re going to cover the core concepts behind React:</p>
                <ul className='page-text__list'>
                    <li>React Native</li>
                    <li>React Navigation</li>
                    <li>TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>Styled Components</li>
                    <li>Firebase</li>
                </ul>
            </PageText>
        </PageContainer>
    );
}

