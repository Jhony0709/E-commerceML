import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo_ML.png';
import SearchForm from './SearchForm';

function header() {
    return (
        <nav className="nav">
            <div className="nav__content max-width">
                <div className="logo">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                </div>
                <SearchForm></SearchForm>
            </div>
        </nav>
    );
}

export default header;