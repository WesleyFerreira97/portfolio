import React from 'react';
import { PageContainer, ProjectPreview, PageText } from '../../style/componentsDefault';

interface AboutProps {
    bg: string;    
}

export function AboutMe(props: AboutProps) {
    const { bg } = props;
    
    return (
        // <div style={{backgroundColor: bg}}>
        <div style={{backgroundColor: bg}}>
        <PageContainer>
            <ProjectPreview>
                <div className='project-preview__wrap'>
                    <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="project preview" />
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
        </div>
    );
}

