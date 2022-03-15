import React from 'react'
import { PageContainer, PageContainerInner } from '../../components/PageBehavior'
import { PageGallery } from '../../components/PageGallery'
import { PageInfo } from '../../components/PageInfo'
import MockupImage from '../../assets/SiamMockup.png'
import { Button } from '../../components/Button'

export function Siam() {

	return (
		<PageContainer>
			<PageContainerInner>
				<PageInfo>
					<h1 className='page-info__title'>APP Administrativo</h1>
					<h2 className='page-info__subtitle'>React Native</h2>
					<div className='page-info__overflow'>
						<p className='page-info__paragraph'>App desenvolvido para uma academia local com a finalidade de criar um melhor gerenciamento de clientes e pagamentos</p>
						<h2 className='page-info__subtitle'>Tecnologias Utilizadas</h2>
						<ul className='page-info__list'>
							<li>TypeScript</li>
							<li>React Native</li>
							<li>React Navigation</li>
							<li>React Native Paper</li>
							<li>Formik com Yup</li>
							<li>Firebase</li>
						</ul>
						<div className='page-info__buttons'>
							<Button link="https://github.com/WesleyFerreira97/siamfight-admin-react-native">Github</Button>
						</div>
					</div>
				</PageInfo>
				<PageGallery>
					<div className='project-preview__wrap'>
						<img src={MockupImage} alt="project preview" />
					</div>
				</PageGallery>
			</PageContainerInner>
		</PageContainer>
	)
}
