import React from 'react';
import logo from "../assets/hau4.jpg";
import phone from "../assets/phone-call.png";
import email from "../assets/email.png";
import github from "../assets/github.png";
import user from "../assets/user.png";
import calendar from "../assets/calendar.png";
import gps from "../assets/gps.png";

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-content">
                <div className='avatar'>
                    <img src={logo} alt='avatar' className="avatar-img" />
                </div>
                <div className='info'>
                    <p className='name'>PHAM VAN HAU</p>
                    <p className='role'>Developer Web</p>
                </div>
                <div className="vertical-line"></div>
                <div className='contact-info'>
                    <div className='contact-item'>
                        <a href='tel:0375684441'><img src={phone} alt='icon-phone' /></a>
                        <p className='contact-text'>0375684441</p>
                    </div>
                    <div className='contact-item'>
                        <a href='mailto:phamvanhau692002vip@gmail.com'><img src={email} alt='icon-email' /></a>
                        <p className='contact-text'>phamvanhau692002vip@gmail.com</p>
                    </div>
                    <div className='contact-item'>
                        <a href='https://github.com/iamhaupv'><img src={github} alt='icon-github' /></a>
                        <a id="github" href='https://github.com/iamhaupv' className='contact-text'>https://github.com/iamhaupv</a>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className='personal-info'>
                    <div className='info-item'>
                        <img src={user} alt='icon-user' />
                        <p className='info-text'>Male</p>
                    </div>
                    <div className='info-item'>
                        <img src={calendar} alt='icon-calendar' />
                        <p className='info-text'>06/09/2002</p>
                    </div>
                    <div className='info-item'>
                        <a href='https://goo.gl/maps/wfiXEt9DgTMiAsgS7'><img src={gps} alt='icon-gps' /></a>
                        <p className='info-text'>An Hiep, Tuy An, Phu Yen</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
