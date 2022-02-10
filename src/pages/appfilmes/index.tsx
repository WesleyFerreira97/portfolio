import React from 'react';
import { PageContainer, ProjectPreview, PageText } from '../../style/componentsDefault';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import moviesList from '../../assets/mobilefilmes.png';

export function AppFilmes() {
    
    return (
        <PageContainer>
            <div className='page-container__wrap'>
                <ProjectPreview>
                    <div className='project-preview__wrap'>
                        <img src={moviesList} alt="project preview" />
                    </div>
                </ProjectPreview>
                
                <PageText>
                    <h1 className='page-text__title'>Site de Filmes</h1>
                    <h2 className='page-text__subtitle'>React Js</h2>
                    <div className='page-text__overflow'>
                        <p className='page-text__paragraph'>Tema Web criado utilizando React Js e consumindo uma API com informações de Filmes</p>
                    <h2 className='page-text__subtitle' style={{marginTop: '3rem'}}>Tecnologias Utilizadas</h2>
                        <ul className='page-text__list'>
                            <li>React</li>
                            <li>TMDB APi</li>
                            <li>API Github</li>
                            <li>Styled-components</li>
                            <li>Typescript</li>
                        </ul>
                        <div className='page-text__buttons'>
                            {/* <Button variant="contained" href="https://imersao-alura-react-c80bkgo5b-wesleyferreira97.vercel.app/" target="_blank">Preview</Button> */}
                            <Button variant="outlined" href="https://github.com/WesleyFerreira97/react-js-moviesdb-theme" target="_blank">Github</Button>
                        </div>
                    </div>
                </PageText>
            </div>
        </PageContainer>
    );
}
