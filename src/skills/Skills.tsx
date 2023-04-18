import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill skillTitle={'js'} skillDescription={'skillDescription for js'}/>
                    <Skill skillTitle={'ts'} skillDescription={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.\n' +
                        'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.\n' +
                        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.\n'}/>
                    <Skill skillTitle={'react'} skillDescription={'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.\n' +
                        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.\n' +
                        'Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla.\n'}/>
                    <Skill skillTitle={'redux'} skillDescription={'Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique.\n' +
                        'Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n' +
                        'Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis.\n' +
                        'Pellentesque porttitor, velit lacinia egestas auctor, diam eros tempus arcu, nec vulputate augue magna vel risus. Cras non magna vel ante adipiscing rhoncus. Vivamus a mi.\n'}/>
                    <Skill skillTitle={'css'} skillDescription={'Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus consequat consequat.\n' +
                        'Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique.\n' +
                        'Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n' +
                        'Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis.\n'}/>
                    <Skill skillTitle={'html'} skillDescription={'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.\n' +
                        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.\n' +
                        'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.\n' +
                        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.\n'}/>
                    {/*<Skill skillTitle={'css'} skillDescription={'skillDescription for css'}/>*/}
                </div>

            </div>
        </div>
    );
}

