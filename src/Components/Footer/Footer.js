import React from 'react';
import './Footer.css';
import './FooterMobile.css';

import logoVK from '../img/Footer/logoVK.svg';
import logoDIS from '../img/Footer/logoDIS.svg';
import logoTG from '../img/Footer/logoTG.svg';

function Footer() {
    return (
        <div className="footer" >
            <div className="div-footer" >
                <p className="copyright-footer" >© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
                <p className="copyright-footerMobile" >iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
                <div className="ico-footer" >
                    <img className="logoVK-footer" src={logoVK} alt="" />
                    <img className="logoDIS-footer" src={logoDIS} alt="" />
                    <img className="logoTG-footer" src={logoTG} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
