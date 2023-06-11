import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import mainAvatar from '../assets/images/Main-avatar.png'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                {/*<h1> I am a cool man</h1>*/}
                <div className={style.text}>
                    <span>Hi</span>
                    <h1> I am a cool man</h1>
                    <p>frontend developer</p>
                </div>
                <div className={style.photo} style={{backgroundImage: `url(${mainAvatar})`}}></div>
            </div>

        </div>
    );
}

