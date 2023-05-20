import React from 'react';
import style from './Contacts.module.scss';
//import style from './Contacts2.module.css';
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                {/*<h2 className={style.title}>Contacts</h2>*/}
                <Title title='Contacts'/>
                <form className={style.inputForm}>
                    <input className={style.fields} type="text"/>
                    <input className={style.fields} type="text"/>
                    <textarea className={`${style.textArea} ${style.fields}`}></textarea>
                    <div className={style.buttonContainer}>
                        <button className={style.button}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

