import React from 'react';
import { PageContainer, ProjectPreview, PageText } from '../../style/componentsDefault';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tag from '../../assets/icons/tag.svg';
import { About, AboutText } from './style';

export function AboutMe() {
    // console.log(Tag);
    
    return (
        <About>
            <div className='page-container__wrap'>
                <PageText>
                    <h1 className='page-text__title'>Wesley Ferreira Costa</h1>
                    <h2 className='page-text__subtitle'>Desenvolvedor Front-end</h2>
                    <div className='page-text__overflow'>
                        <p className='page-text__paragraph'>Olá;</p>
                        <p className='page-text__paragraph'>Me chamo Wesley, tenho 24 anos e estudo desenvolvimento Web a alguns anos, possuo um solido conhecimento nas principais tecnologias bases da Web ( HTML, CSS, JS ), aqui você encontra alguns dos projetos que desenvolvi utilizando algumas das atuais e principais tecnologias de desenvolvimento  Web no momento</p>
                    </div>
                </PageText>
            </div>
        </About>
    );
}
