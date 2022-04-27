import React from 'react';
import './Header.css';
import './HeaderMobile.css';

import logo from '../img/Header/logo.svg';
import myPhoto from '../img/Header/myPhoto.jpg';

import personMobile from '../img/MobileIMG/Header/person.svg'

function Header() {
    return (
        <header className="header">
            <div className="header-div" >
                <div className="header-photo" >
                    <img className="header-photo_img" src={myPhoto} alt="" />
                    <p className='header-fName'>Владимир Плиско</p>
                    <p className='header-fNameMobile'>Вова</p>
                </div>
                <img className="header-logo" src={logo} alt="" />
                <button className="header-btn" >Панель управления</button>
                <button className="header-btnMobile" ><img src={personMobile} /></button>
            </div>
        </header>
    );
}

export default Header;
