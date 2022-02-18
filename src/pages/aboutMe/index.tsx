import { PageInfo } from '../../components/PageInfo';
import { About } from './style';
import { PageContainer, PageContainerInner } from '../../components/PageBehavior';
import { PageGallery } from '../../components/PageGallery';

export function AboutMe(props: any) {
    console.log(props)
    return (
        <PageContainer>
            <PageContainerInner>
                <PageGallery>asdadlkj</PageGallery>
                <About>
                    <div className='page-container__wrap'>
                        <PageInfo>
                            <h1 className='page-info__title'>Wesley Ferreira Costa</h1>
                            <h2 className='page-info__subtitle'>Desenvolvedor Front-end</h2>
                            <div className='page-info__overflow'>
                                <p className='page-info__paragraph'>Olá;</p>
                                <p className='page-info__paragraph'>Me chamo Wesley, tenho 24 anos e estudo desenvolvimento Web a alguns anos, possuo um solido conhecimento nas principais tecnologias bases da Web ( HTML, CSS, JS ), aqui você encontra alguns dos projetos que desenvolvi utilizando algumas das atuais e principais tecnologias de desenvolvimento  Web no momento</p>
                            </div>
                        </PageInfo>
                    </div>
                </About>
            </PageContainerInner>
        </PageContainer>
    );
}
