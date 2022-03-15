import React from 'react'
import { PageInfo } from '../../components/PageInfo'
import { PageContainer, PageContainerInner } from '../../components/PageBehavior'
import { PageGallery } from '../../components/PageGallery'
import { Button } from '../../components/Button'
import moviesList from '../../assets/mobilefilmes.png'

export function AppFilmes() {

	return (
		<PageContainer>
			<PageContainerInner>
				<PageInfo>
					<h1 className='page-info__title'>Site de Filmes</h1>
					<h2 className='page-info__subtitle'>React Js</h2>
					<div className='page-info__overflow'>
						<p className='page-info__paragraph'>Tema Web criado utilizando React Js e consumindo uma API com informações de Filmes</p>
						<h2 className='page-info__subtitle' style={{ marginTop: '3rem' }}>Tecnologias Utilizadas</h2>
						<ul className='page-info__list'>
							<li>React</li>
							<li>TMDB APi</li>
							<li>Styled-components</li>
						</ul>
						<div className='page-info__buttons'>
							<Button link="https://github.com/WesleyFerreira97/react-js-moviesdb-theme">Github</Button>
						</div>
					</div>
				</PageInfo>
				<PageGallery>
					<div className='project-preview__wrap'>
						<img src={moviesList} alt="project preview" />
					</div>
				</PageGallery>
			</PageContainerInner>
		</PageContainer>
	)
}
