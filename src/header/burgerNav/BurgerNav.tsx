import React, {useState} from 'react';
import style from 'header/burgerNav/BurgerNav.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll';
import {NavLink} from 'react-router-dom';

export const BurgerNav = () => {

	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const toggleBurger = () => {
		//debugger
		setIsBurgerOpen(!isBurgerOpen)

	}
	//console.log(isBurgerOpen)

	return (
		<div className={style.burgerNav}>
			<div className={isBurgerOpen? style.burgerNavItems: `${style.burgerNavItems} ${style.hide}`}>
				{/*<NavLink to="" className={({ isActive }) => isActive ? style.activeLink : ''}>Главная</NavLink>*/}
				{/*<NavLink to="" className={({ isActive }) => isActive ? style.activeLink : ''}>Главная2</NavLink>*/}
				{/*<a href="/">Main</a>*/}
				<Link
					activeClass={style.activeLink}
					to='main' spy={true}
					smooth={true}
					offset={-70}
					duration={500}>Main </Link>
				{/*<a href="#skills">Skills</a>*/}
				<Link
					activeClass={style.activeLink}
					to='skills' spy={true}
					smooth={true}
					offset={-70}
					duration={500}>Skills </Link>
				{/*<a href="#projects">Projects</a>*/}
				<Link
					activeClass={style.activeLink}
					to='projects' spy={true}
					smooth={true}
					offset={-70}
					duration={500}>Projects </Link>
				{/*<a href="#contacts">Contacts</a>*/}
				<Link
					activeClass={style.activeLink}
					to='contacts' spy={true}
					smooth={true}
					offset={-70}
					duration={500}>Contacts </Link>

			</div>
			<div onClick={toggleBurger} className={style.burgerButton}></div>
		</div>
	);
}

