import React from 'react';
import { PageContainer, ProjectPreview, PageText } from '../../style/componentsDefault';

interface AboutProps {
    bg: string;    
}

export function AboutMe(props: AboutProps) {
    const { bg } = props;
    
    return (
        <PageContainer>
            <div className='page-container__wrap'>
                <ProjectPreview>
                    <div className='project-preview__wrap'>
                        <img src="https://github.com/WesleyFerreira97/siamfight-admin-react-native/raw/main/ScreenShots/Screenshot%20(1).jpg" alt="project preview" />
                    </div>
                </ProjectPreview>
                
                <PageText>
                    <h1 className='page-text__title'>APP Administrativo</h1>
                    <h2 className='page-text__subtitle'>React Native</h2>
                    <p className='page-text__paragraph'>App desenvolvido para uma academia local com a finalidade de criar um melhor gerênciamento de clientes e pagamentos</p>
                    <ul className='page-text__list'>
                        <li>TypeScript</li>
                        <li>React Native</li>
                        <li>React Navigation</li>
                        <li>React Native Paper</li>
                        <li>Formik com Yup</li>
                        <li>Firebase</li>
                    </ul>
                </PageText>
            </div>
        </PageContainer>
    );
}

