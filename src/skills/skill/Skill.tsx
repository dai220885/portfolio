import React from 'react';
import style from './Skill.module.scss';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
//import { faReact } from '@fortawesome/free-brands-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

export type SkillPropsType = {
    skillTitle: string
    skillDescription: string
    icon?: IconProp
    style?: {}
    //icon: FontAwesomeIconProps
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}>
                {props.icon && <FontAwesomeIcon icon={props.icon} className={style.icon}/>}
            </div>
            <div className={style.titleAndDescContainer}>
                <h3 className={style.title}>{props.skillTitle}</h3>
                <div className={style.description}>
                {props.skillDescription}
            </div>
            </div>
        </div>
    );
}

