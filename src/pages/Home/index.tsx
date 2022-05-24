import React from "react";
import { PageInfo } from "../../components/PageInfo";
import { About } from "./style";
import { PageContainer, PageContainerInner } from "../../components/PageBehavior";
import { PageGallery } from "../../components/PageGallery";

export function Home(props: any) {
	console.log(props);
	return (
		<PageContainer>
			<PageContainerInner>

				<About>
					<div className='page-container__wrap'>
						<PageInfo>
							<h1 className='page-info__title'>Wesley Ferreira Costa</h1>
							<h2 className='page-info__subtitle'>Desenvolvedor Front-end</h2>
							<div className='page-info__overflow'>
							</div>
						</PageInfo>
					</div>
				</About>
			</PageContainerInner>
		</PageContainer>
	);
}
