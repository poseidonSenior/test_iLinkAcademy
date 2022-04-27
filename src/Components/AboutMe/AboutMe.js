import React from 'react';
import './AboutMe.css';
import './AboutMeMobile.css';

import myPhoto from '../img/AboutMe/myPhoto.jpg';
import gender from '../img/AboutMe/myGender.svg';
import food from '../img/AboutMe/food.svg';

function AboutMe() {
    return (
        <div className="aboutMe" >
            <div className="photo-aboutMe" >
                <img className="photo_img-aboutMe" src={myPhoto} alt="" />
            </div>
            <div className="about-aboutMe" >
                <div className="allText-aboutMe" >
                    {/* =============================================================================== */}
                    <div className="first-aboutMe">
                        <div className="myName-aboutMe" >Владимир Плиско</div>
                        <div className="dateOfBirth-aboutMe" >03.02.1998</div>
                    </div>

                    {/* =============================================================================== */}
                    <div className="second-aboutMe" >
                        <div className="divBlock-Mobile" >
                            <div className="div-city-abMe" >
                                <p className="city-abMe" >Город: </p>
                                <p className="myCity-abMe" >Томск</p>
                            </div>
                            <div className="div-gender-abMe" >
                                <p className="gender-abMe" >Пол:</p>
                                <p className="myGender-abMe" >мужчина</p>
                                <img className="imgGender" src={gender} />
                            </div>
                        </div>
                        <div className="div-age-abMe" >
                            <p className="age-abMe" >Возраст:</p>
                            <p className="myAge-abMe" >24</p>
                        </div>
                    </div>

                    {/* =============================================================================== */}

                    <div className="third-aboutMe" >
                        <p className="text_talk-abMe" ><b className="talk-abMe" >О себе: </b> Всем привет! Меня зовут Владимир, мне 24 года, я студент магистрант 2го курса ТГУ. Всегда мечтал работать в успешной айти компании программистом, но за весь срок обучения в вузе ни разу не работал в профильных компаниях. Помимо учебной программы, которую изучаем в институте, дополнительно изучаю JS, React, Node.js и делаю различные практические задания. </p>
                    </div>

                    {/* =============================================================================== */}

                    <div className="fourth-aboutMe" >
                        <img className="food-aboutMe" src={food} />
                        <p className="pet-aboutMe" ><b className="pet-abMe" >Домашнее животное: </b> есть</p>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default AboutMe;
