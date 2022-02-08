import React from 'react';
import { NavigationWrap, Menu } from './style';
import { FaReact } from "react-icons/fa";

export function Navigation() {
  return (
    <NavigationWrap>

        <Menu>
          <li className='menu-item'>
            <FaReact />
            <span className='menu-item__title'>APP Administrativo</span>
          </li>  
          <li className='menu-item'>
            <FaReact />
            <span className='menu-item__title'>Aluracord</span>
          </li>  
          <li className='menu-item'>
            <FaReact />
            <span className='menu-item__title'>API de Filmes</span>
          </li>  
        </Menu>   
    </NavigationWrap>
  );
}
