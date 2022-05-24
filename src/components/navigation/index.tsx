import React from "react";
import { NavigationWrap, Menu, OpenMenu } from "./style";
import { FaReact } from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";

interface NavigationProps {
	setIndex: (index: number) => void;
}

export function Navigation({ setIndex }: NavigationProps) {
	return (
		<NavigationWrap>
			<div className='portfolio-photo'>
				<img src="https://avatars.githubusercontent.com/u/7539166?v=4" alt="project preview" />
			</div>
			<Menu>
				<li className='menu-item' onClick={() => setIndex(0)}>
					<FaReact />
					<span className='menu-item__title'>APP React Native</span>
				</li>
				<li className='menu-item' onClick={() => setIndex(1)}>
					<FaReact />
					<span className='menu-item__title'>APP React Js</span>
				</li>
				<li className='menu-item' onClick={() => setIndex(2)}>
					<FaReact />
					<span className='menu-item__title'>API de Filmes</span>
				</li>
			</Menu>

			<OpenMenu>
				<BsBoxArrowRight />
			</OpenMenu>
		</NavigationWrap>
	);
}



