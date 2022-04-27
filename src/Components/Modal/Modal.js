import React, { useEffect, useState } from 'react'
import './Modal.css'
import './ModalMobile.css'

import photoClose from '../img/Modal/close.svg'
import commPlus from '../img/Comment/plus.svg'
import info from '../img/Modal/Info.svg'
import errorRedBlock from '../img/Modal/Error.svg'
import errorMessage from '../img/Modal/errorMessage.svg'
import imgUploadFile from '../img/Modal/icoFile.svg'
import imgDeleteFile from '../img/Modal/icoDelete.svg'
import stateBar from '../img/Modal/stateBar.svg'
import stateBarRed from '../img/Modal/stateBarRed.svg'

const Modal = props => {
    //Состояние для загружаемого файла не более 550000 байтов
    const [file, setFile] = useState()

    //Изначальное состояние
    const [firstName, setInputName] = useState('')
    const [textComment, setTextArea] = useState('')

    // const [btnPhoto, setPhoto] = useState(true)
    // const [btnComment, setComment] = useState(true)

    //Проверка: были ли мы внутри input
    const [firstNameDirty, setInputNameDirty] = useState(false)
    const [textCommentDirty, setTextAreaDirty] = useState(false)

    //Вывод состояния ошибок
    const [firstNameError, setInputNameError] = useState('Имя не может быть пустым')
    const [textCommentError, setTextAreaError] = useState('Поле отзыва пустое')

    //Проверка валидности имени для кнопки "Загрузки фото"
    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        if (firstNameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [firstNameError])

    //Проверка валидности формы для кнопки "Отправить отзыв"
    const [formValidAll, setFormValidAll] = useState(false)
    useEffect(() => {
        if (firstNameError || textCommentError) {
            setFormValidAll(false)
        } else {
            setFormValidAll(true)
        }
    }, [firstNameError, textCommentError])


    const firstNameHandler = (e) => {
        setInputName(e.target.value);
        setInputNameError('');
    }

    const textCommentHandler = (e) => {
        setTextArea(e.target.value);
        setTextAreaError('')
    }


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setInputNameDirty(true);
                break;

            case 'textComment':
                setTextAreaDirty(true);
                break;
        }
    }


    function submitForm(e) {
        e.preventDefault();
    }

    function outputInfo() {
        console.log('Имя фамилия: ' + firstName + `\n` + 'Отзыв: ' + textComment + `\n` + 'Название файла: ' + file);
        alert('Имя фамилия: ' + firstName + `\n` + 'Отзыв: ' + textComment + `\n` + 'Название файла: ' + file);
        setTextArea('');
        setInputName('');
        setFile('');
    }

    function handleChange(event) {
        if (event.target.files[0].size > 550000) {
            setFile('Your file is too big!')
        } else {
            setFile(event.target.files[0].name)
        }
        // console.log(event.target.files[0]);
    }

    return (
        <form onSubmit={submitForm} className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }} >
            <div className={`modal__body  `} >
                <div className="fst_modalBlock" >
                    <p className="modal_commentBlock" >Отзыв</p>
                    <button className="modal__close" onClick={props.onModalClose} ><img src={photoClose} /></button>
                </div>
                <p className="modal__question whName-modal" >Как вас зовут?</p>
                <div className="snd_modalBlock" >
                    <input onChange={e => firstNameHandler(e)} value={firstName} onBlur={e => blurHandler(e)} name="firstName" className={`input__modal ${(firstNameDirty === true && firstNameError === 'Имя не может быть пустым') ? 'redBorder' : ' '} `} type="text" placeholder="Имя Фамилия" />


                    <button disabled={!formValid} className={`btn-commentBtnModal ${!formValid ? 'disabled' : ' '} `} ><img className="commPlus" src={commPlus} /><input className="downlFile__Modal" type='file' onChange={handleChange} style={{ display: `${!formValid ? 'none' : ''}` }} />Загрузить фото</button>

                    <button disabled={!formValid} className={`btn-commentMobileModal ${!formValid ? 'disabled' : ' '} `} ><img className="commPlusMobile" src={commPlus} /><input className="downlFile__Modal" type='file' onChange={handleChange} style={{ display: `${!formValid ? 'none' : ''}` }} />Загрузить фото</button>
                </div>

                {(firstNameDirty && firstNameError) &&
                    <div className="errorMessage__Modal" >
                        <img className="errorImg__Modal" src={errorMessage} />
                        <p className="errorText__Modal" >{firstNameError}</p>
                    </div>}
                {/* onChange={(e) => setSelectedFile(e.target.files[0])} */}

                {
                    file &&

                    <div className="blockUploadFiles" >
                        <img className="imgUploadFile" src={imgUploadFile} />
                        <div>
                            <p className={`nameUpFile ${file === 'Your file is too big!' ? 'errorRed-P' : ' '} `}  >{file}</p>
                            <img src={file === 'Your file is too big!' ? stateBarRed : stateBar} />
                        </div>
                        <img className="imgDeleteFile" src={imgDeleteFile} onClick={() => setFile()} />
                    </div>
                }

                {/* {(firstNameDirty && firstNameError) &&
                    <div className="errorMessage__Modal" >
                        <img className="errorImg__Modal" src={errorMessage} />
                        <p className="errorText__Modal" >{firstNameError}</p>
                    </div>} */}
                <p className="modal__question whLike-modal" >Все ли вам понравилось?</p>

                <textarea onChange={e => textCommentHandler(e)} value={textComment} onBlur={e => blurHandler(e)} name="textComment" className={`modal__textArea ${(textCommentDirty === true && textCommentError === 'Поле отзыва пустое') ? 'redBorder' : ' '} `} maxLength={200} placeholder="Напишите пару слов о вашем опыте..." />

                {(textCommentDirty && textCommentError) &&
                    <div className="errorMessage__Modal" >
                        <img className="errorImg__Modal" src={errorMessage} />
                        <p className="errorText__Modal" >{textCommentError}</p>
                    </div>}

                <div className="trd_modalBlock" >
                    <button disabled={!formValidAll}
                        className={`modal__btn ${!formValidAll ? 'disabled' : ' '}`}
                        onClick={() => { props.confirmAddImg(); props.onModalClose(); outputInfo() }}
                    >Отправить отзыв</button>
                    <div className="divFlexMobile" >
                        <img className="modalPhoto__info" src={info} />
                        <p className="modalText__info" >Все отзывы проходят модерацию в течение 2 часов</p>
                    </div>
                    <button disabled={!formValidAll}
                        className={`modal__btnMobile ${!formValidAll ? 'disabled' : ' '}`}
                        onClick={() => { props.confirmAddImgMobile(); props.onModalClose(); outputInfo() }}
                    >Отправить отзыв</button>

                </div>
            </div>
        </form >
    )
}

export default Modal
