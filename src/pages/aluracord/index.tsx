import React from 'react';
import { PageInfo } from '../../components/PageInfo';
import { PageContainer, PageContainerInner } from '../../components/PageBehavior';
import { PageGallery } from '../../components/PageGallery';
import Button from '@mui/material/Button';

export function AluraCord() {

    return (
        <PageContainer>
            <PageContainerInner>
                <PageInfo>
                    <h1 className='page-info__title'>Aluracord</h1>
                    <h2 className='page-info__subtitle'>React Js</h2>
                    <div className='page-info__overflow'>
                        <p className='page-info__paragraph'>App desenvolvido em 6 dias durante a semana de imersão React da plataforma de cursos Alura, entre as funcionalidades foi desenvolvido um Chat em tempo real utilizando uma plataforma de Backend as a Service para a criação e no login uma busca por perfis na API do Github</p>
                        <h2 className='page-info__subtitle' style={{ marginTop: '3rem' }}>Tecnologias Utilizadas</h2>
                        <ul className='page-info__list'>
                            <li>React (Next Js)</li>
                            <li>SupaBase</li>
                            <li>API Github</li>
                            <li>SkyNexUi</li>
                            <li>Ts-Particles</li>
                        </ul>
                        <div className='page-info__buttons'>
                            <Button variant="contained" href="https://imersao-alura-react-c80bkgo5b-wesleyferreira97.vercel.app/" target="_blank">Preview</Button>
                            <Button variant="outlined" href="https://github.com/WesleyFerreira97/imersao-alura-react" target="_blank">Github</Button>
                        </div>
                    </div>
                </PageInfo>
                <PageGallery>
                    <div className='project-preview__wrap'>
                        <img src="https://user-images.githubusercontent.com/7539166/151868022-30dfdcca-6542-4350-9688-56950a501235.png" alt="project preview" />
                    </div>
                </PageGallery>
            </PageContainerInner>
        </PageContainer>
    );
}
