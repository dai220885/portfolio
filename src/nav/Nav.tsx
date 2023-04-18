import React from 'react';
import style from './Nav.module.css';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<NavLink to="" className={({ isActive }) => isActive ? style.activeLink : ''}>Главная</NavLink>*/}
            {/*<NavLink to="" className={({ isActive }) => isActive ? style.activeLink : ''}>Главная2</NavLink>*/}
            <NavLink to="">Главная</NavLink>
            <NavLink to="">Скиллы</NavLink>
            <NavLink to="">Проекты</NavLink>
            <NavLink to="">Контакты</NavLink>
        </div>
    );
}

