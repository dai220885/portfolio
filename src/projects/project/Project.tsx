import React from 'react';
import style from './Project.module.scss';
import {NavLink} from 'react-router-dom';
import Button from 'common/components/button/Button';
import {Fade} from 'react-awesome-reveal';


export type ProjectPropsType = {
	style?: {}
	projectTitle: string
	projectDescription: string
}

export const Project = (props: ProjectPropsType) => {
	//TODO описать онклик, чтобы навигейтило на проект
	return (
		<div className={style.project}>
			<Fade className={style.previewContainer}>
				<div className={style.previewContainer} style={props.style}>
					{/*<div className={style.image} > /!*пока не используем*!/*/}
					{/*<NavLink className={style.viewBtn} to="/project">View</NavLink>*/}
					<Button buttonValue={'View'}/>
					{/*</div>*/}
				</div>
			</Fade>
			<div className={style.titleAndDescContainer}>
				<Fade cascade damping={0.2}>
					<h3 className={style.title}>{props.projectTitle}</h3>
					<div className={style.description}>
						{props.projectDescription}
					</div>
				</Fade>
			</div>

		</div>
	);
}

