import React from 'react';
import style from './Header.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Nav} from './nav/Nav';
import {BurgerNav} from 'header/burgerNav/BurgerNav';

export const Header = () => {
	return (
		<div className={`${style.header}`}>
			<Nav/>
			<BurgerNav/>
		</div>
	);
}

