import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faTelegram} from '@fortawesome/free-brands-svg-icons/faTelegram';
import {faAt} from '@fortawesome/free-solid-svg-icons/faAt';
import gitHubIcon from '../assets/images/footer/github_white.svg';
import instagramIcon from '../assets/images/footer/instagram_white.svg';
import emailIcon from '../assets/images/footer/email_white.svg';
import telegramIcon from '../assets/images/footer/telegram_white.svg';
import {Fade} from 'react-awesome-reveal';

export const Footer = () => {
	//TODO вместо отдельных дивок с соцсетями сделать компоненту
	return (

			<div className={style.footerBlock}>
				<Fade>
				<div className={`${styleContainer.container} ${style.footerContainer}`}>
					{/*<Fade>*/}
						<h2 className={style.title}>Alexandr Dylevich</h2>
					{/*</Fade>*/}

					{/*<Fade>*/}
						<div className={style.socialNetworksContainer}>
							<div className={style.network}>
								{/*<FontAwesomeIcon icon={faInstagram} className={style.network}/>*/}
								<a href="https://github.com/dai220885">
									<img src={gitHubIcon} alt="github"/>
								</a>
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
					{/*</Fade>*/}

					<div className={style.copyright}>
						© All rights reserved
					</div>

				</div>
		</Fade>
			</div>

	);
}

