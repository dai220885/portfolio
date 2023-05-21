import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faTelegram} from '@fortawesome/free-brands-svg-icons/faTelegram';
import {faAt} from '@fortawesome/free-solid-svg-icons/faAt';
import gitHubIcon from '../assets/images/footer/github.svg';
import instagramIcon from '../assets/images/footer/instagram.svg';
import emailIcon from '../assets/images/footer/at-solid.svg';
import telegramIcon from '../assets/images/footer/telegram.svg';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Alexandr Dylevich</h2>
                <div className={style.socialNetworksContainer} >
                    <div className={style.network} style={{backgroundImage: `url(${gitHubIcon})`}}>
                        {/*<FontAwesomeIcon icon={faInstagram} className={style.network}/>*/}
                    </div>
                    <div className={style.network} style={{backgroundImage: `url(${instagramIcon})`}}>
                        {/*<FontAwesomeIcon icon={faTelegram} className={style.network}/>*/}
                    </div>
                    <div className={style.network} style={{backgroundImage: `url(${emailIcon})`}}>
                        {/*<FontAwesomeIcon icon={faAt} className={style.network}/>*/}
                    </div>
                    <div className={style.network} style={{backgroundImage: `url(${telegramIcon})`}}>
                    </div>
                </div>
                <div className={style.copyright}>
                    © All rights reserved
                </div>
            </div>
        </div>
    );
}

