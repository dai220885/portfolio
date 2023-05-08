import React from 'react';
import style from './Skill.module.css';

export type SkillPropsType = {
    skillTitle: string
    skillDescription: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>

            <div className={style.icon}></div>
            <div className={style.titleAndDescContainer}>
                <h3 className={style.title}>{props.skillTitle}</h3>
                <div className={style.description}>
                {props.skillDescription}
            </div>
            </div>

        </div>
    );
}

