import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.scss';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Дылевич Александр</h2>
                <div className={style.socialNetworksContainer} >
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                </div>
                <div className={style.copyright}>
                    © Все права защищены
                </div>


            </div>
        </div>
    );
}

