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
            <h3 className={style.title}>{props.skillTitle}</h3>
            <span className={style.description}>
                {props.skillDescription}
            </span>
        </div>
    );
}

