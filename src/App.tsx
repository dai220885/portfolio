import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {BrowserRouter} from 'react-router-dom';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

