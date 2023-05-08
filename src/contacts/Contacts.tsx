import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.inputForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                    <div className={style.button}>
                        <button>Отправить</button>
                    </div>

                </form>



            </div>
        </div>
    );
}

