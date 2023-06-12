import React from 'react';
import style from './Contacts.module.scss';
//import style from './Contacts2.module.css';
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from 'common/components/title/Title';
import Button from 'common/components/button/Button';
import {Fade} from 'react-awesome-reveal';

export const Contacts = () => {
	//TODO стилизовать поля в форме (замечание от Светланы)
	return (
		<div className={style.contactsBlock}>
			<Fade cascade damping={0.2}>
			<div className={`${styleContainer.container} ${style.contactsContainer}`}>
				{/*<h2 className={style.title}>Contacts</h2>*/}
				<Title title="Contacts"/>
				<form className={style.inputForm}>
					<input className={style.input} type="text" placeholder={'name'}/>
					<input className={style.input} type="text" placeholder={'email'}/>
					<textarea className={style.textArea} placeholder={'message'}></textarea>
					<div className={style.buttonContainer}>
						{/*<button className={style.button}>Send</button>*/}
						<Button buttonValue={'Send'}/>
					</div>
				</form>
			</div>
		</Fade>
		</div>
	);
}

