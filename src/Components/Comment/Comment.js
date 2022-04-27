import React, { useState } from 'react';
import './Comment.css';
import './CommentMobile.css';

import { dataPerson } from './PersonsInfo';

import arrRight from '../img/Comment/Slider/arrRight.svg';
import arrLeft from '../img/Comment/Slider/arrLeft.svg';
import commPlus from '../img/Comment/plus.svg';
import photoBuba from '../img/Comment/photoBuba.svg';
import photoNoname from '../img/Comment/photoNoname.svg';
import success from '../img/Modal/success.svg';
import plusComMobile from '../img/MobileIMG/Comment/plusComMobile.svg';
import successMobile from '../img/MobileIMG/Modal/successMobile.svg';

import Modal from '../Modal/Modal';


function Comment() {
    const [modal, setModal] = useState({ modal: false })
    const [validImgModal, setValidModal] = useState({ src: '' })
    const [validImgModalMobile, setValidModalMobile] = useState({ src: '' })

    let res = dataPerson.map(item => {
        return <div className="swipe-comment-person" key={item.id}>
            <div className="div-swipe" >
                <div className="div-commentValid" >
                    <div>
                        <img className="swipe-commentPhoto" src={item.img} />
                        <p className="swipe-commentFirstName" >{item.name}</p>
                    </div>
                    <p className="swipe-commentBofD" >{item.birthday}</p>
                </div>
                <div className="div-commentText" >
                    <p className="swipe-commentText" >{item.comment}</p>
                </div>
            </div>
        </div>
    })

    function validModal() {
        setValidModal({ src: success })
        setTimeout(() => {
            setValidModal({ src: '' })
        }, 5000)
    }
    function validModalMobile() {
        setValidModalMobile({ src: successMobile })
        setTimeout(() => {
            setValidModalMobile({ src: '' })
        }, 5000)
    }

    return (
        <div className="block_Comments_Scroll" >
            <div className="div_Block" >
                <div className="comments" >
                    <div className="commentsScroll" >
                        {/* ================================================ */}
                        <div className="com_AND_plusCom" >
                            <p className="p-comment" >Отзывы</p>
                            <button className="btn-comment" onClick={() => setModal({ modal: true })}><img className="commPlus" src={commPlus} />Добавить отзыв</button>
                            <button className="btn-commentMobile" onClick={() => setModal({ modal: true })} ><img src={plusComMobile} /></button>
                            <Modal title={'Modal Title'} isOpened={modal.modal} onModalClose={() => setModal({ modal: false })} confirmAddImg={validModal} confirmAddImgMobile={validModalMobile} />
                        </div>
                        {/* ================================================ */}
                        <div className="comments-Person" >

                            {res}

                        </div>

                        <div className="comments-PersonMobile" >

                            <div className="swipe-comment-person">
                                <div className="div-swipe" >
                                    <div className="div-commentValid" >
                                        <div>
                                            <img className="swipe-commentPhoto" src={photoBuba} />
                                            <p className="swipe-commentFirstName" >Буба Бубенцов</p>
                                        </div>
                                        <p className="swipe-commentBofD" >08.01.2022</p>
                                    </div>
                                    <div className="div-commentText" >
                                        <p className="swipe-commentText" >Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* ================================================ */}
                        <div className="comments-Scroll" >
                            <div className="commentsPanig panigActiv" ></div>
                            <div className="commentsPanig" ></div>
                            <div className="commentsPanig" ></div>
                        </div>
                        {/* ================================================ */}
                    </div>
                </div>
                <div className="arrows-comment" >
                    <div className="div_arrows-comment" >
                        <button><img className="swiper-button-prev" src={arrLeft} /></button>
                        <button><img className="swiper-button-next" src={arrRight} /></button>
                    </div>
                </div>
                <div >
                    <img className="success__modulComment" src={validImgModal.src} />
                    <img className="success__modulCommentMobile" src={validImgModalMobile.src} />
                </div>
            </div>

        </div >

    );
}

export default Comment;
