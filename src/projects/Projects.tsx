import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project projectTitle={'Project 1'} projectDescription={'skillDescription for Project 1'}/>
                    <Project projectTitle={'Project 2'} projectDescription={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin semper, ante vitae sollicitudin posuere, metus quam iaculis nibh, vitae scelerisque nunc massa eget pede. Sed velit urna, interdum vel, ultricies vel, faucibus at, quam.'}/>
                    <Project projectTitle={'Project 3'} projectDescription={'skillDescription for Project 3'}/>
                </div>

            </div>
        </div>
    );
}

