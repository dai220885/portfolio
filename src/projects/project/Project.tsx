import React from 'react';
import style from './Project.module.scss';
import {NavLink} from 'react-router-dom';


export type ProjectPropsType = {
    style?: {}
    projectTitle: string
    projectDescription: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.previewContainer} style={props.style}>
                {/*<div className={style.image} > /!*пока не используем*!/*/}
                <NavLink className={style.viewBtn} to="/project">View</NavLink>
                {/*</div>*/}
            </div>
            <div className={style.titleAndDescContainer}>
                <h3 className={style.title}>{props.projectTitle}</h3>
                <div className={style.description}>
                {props.projectDescription}
                </div>
            </div>
        </div>
    );
}

