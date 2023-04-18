import React from 'react';
import style from './Project.module.css';
import {NavLink} from 'react-router-dom';


export type ProjectPropsType = {
    projectTitle: string
    projectDescription: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>

            <div className={style.previewContainer}>
                <NavLink to="/project">Link to {props.projectTitle}</NavLink>
            </div>
            <div className={style.titleAndDescContainer}>
                <h3 className={style.title}>{props.projectTitle}</h3>
                <span className={style.description}>
                {props.projectDescription}
                </span>
            </div>
        </div>
    );
}

