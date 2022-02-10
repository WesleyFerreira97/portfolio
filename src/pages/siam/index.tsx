import React from 'react';
import { PageContainer, ProjectPreview, PageText } from '../../style/componentsDefault';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Siam() {
    
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
                    <div className='page-text__overflow'>
                        <p className='page-text__paragraph'>App desenvolvido para uma academia local com a finalidade de criar um melhor gerenciamento de clientes e pagamentos</p>
                    <h2 className='page-text__subtitle' style={{marginTop: '3rem'}}>Tecnologias Utilizadas</h2>
                        <ul className='page-text__list'>
                            <li>TypeScript</li>
                            <li>React Native</li>
                            <li>React Navigation</li>
                            <li>React Native Paper</li>
                            <li>Formik com Yup</li>
                            <li>Firebase</li>
                        </ul>
                        <div className='page-text__buttons'>
                            {/* <Button variant="contained" href="google.com">Preview</Button> */}
                            <Button variant="outlined" href="https://github.com/WesleyFerreira97/siamfight-admin-react-native" target="_blank">Github</Button>
                        </div>
                    </div>
                </PageText>
            </div>
        </PageContainer>
    );
}
