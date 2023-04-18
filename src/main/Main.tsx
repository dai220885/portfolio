import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi</span>
                    <h1> I am a cool man</h1>
                    <p>frontend developer</p>
                </div>
                <div className={style.photo}> photo</div>
            </div>

        </div>
    );
}

