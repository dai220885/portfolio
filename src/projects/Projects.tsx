import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoListProjectImg from '../assets/images/Todolist-project-pic.png'
import socialNetworkProjectImg from '../assets/images/Social-network-project-pic.png'
import counterProjectImg from '../assets/images/Counter-project-pic.png'

export const Projects = () => {
    const socialStyle = {
        backgroundImage: `url(${socialNetworkProjectImg})`,
    }
    const todoStyle = {
        backgroundImage: `url(${todoListProjectImg})`,
    }
    const counterStyle = {
        backgroundImage: `url(${counterProjectImg})`,
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
               <Title title='Projects'/>
                <div className={style.projects}>
                    <Project style = {socialStyle}
                             projectTitle={'Project 1'}
                             projectDescription={'skillDescription for Project 1dfdfdfdfdd dfdfdfd dfdf dfdf '}
                    />
                    <Project style = {todoStyle}
                             projectTitle={'Project 2'}
                             projectDescription={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin semper, ante vitae sollicitudin posuere, metus quam iaculis nibh, vitae scelerisque nunc massa eget pede. Sed velit urna, interdum vel, ultricies vel, faucibus at, quam.'}
                    />
                    <Project style = {counterStyle}
                             projectTitle={'Project 3'}
                             projectDescription={'skillDescription for Project 3'}
                    />
                </div>

            </div>
        </div>
    );
}

