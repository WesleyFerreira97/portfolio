import React from 'react';
import { NavigationWrap, Menu } from './style';
import { FaReact } from "react-icons/fa";

export function Navigation({ setIndex }: any) {
  return (
    <NavigationWrap>

        <Menu>
          <li className='menu-item' onClick={() => setIndex(1)}>
            <FaReact />
            <span className='menu-item__title'>APP Administrativo</span>
          </li>  
          <li className='menu-item' onClick={() => setIndex(2)}>
            <FaReact />
            <span className='menu-item__title'>Aluracord</span>
          </li>  
          <li className='menu-item' onClick={() => setIndex(3)}>
            <FaReact />
            <span className='menu-item__title'>API de Filmes</span>
          </li>  
        </Menu>   
    </NavigationWrap>
  );
}
