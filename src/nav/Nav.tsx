import React from 'react';
import style from './Nav.module.scss';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<NavLink to="" className={({ isActive }) => isActive ? style.activeLink : ''}>Главная</NavLink>*/}
            {/*<NavLink to="" className={({ isActive }) => isActive ? style.activeLink : ''}>Главная2</NavLink>*/}
            <NavLink to="">Main</NavLink>
            <NavLink to="">Skills</NavLink>
            <NavLink to="">Projects</NavLink>
            <NavLink to="">Contacts</NavLink>
        </div>
    );
}

