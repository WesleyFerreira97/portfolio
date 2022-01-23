import React from 'react';
import { About } from './style';
import { PageContainer, ProjectPreview, AboutProject } from '../../components/utilities/componentDefaultStyles';

export function AboutMe() {

    return (
        <PageContainer>
            <ProjectPreview>
                <div className='project-preview__wrap'>
                    <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="project preview" />
                </div>
            </ProjectPreview>
            <AboutProject>
                <h1 className='about-project__title'>APP Administrativo</h1>
                <h2 className='about-project__subtitle'>React Native</h2>
                <p className='about-project__text'>React Native runs on React, a popular open source library for building user interfaces with JavaScript. To make the most of React Native, it helps to understand React itself. This section can get you started or can serve as a refresher course.</p>
                <p>We’re going to cover the core concepts behind React:</p>
                <ul className='about-project__menu'>
                    <li>React Native</li>
                    <li>React Navigation</li>
                    <li>TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>Styled Components</li>
                    <li>Firebase</li>
                </ul>
            </AboutProject>
        </PageContainer>
    );
}
