import React from 'react';
import logo from "../assets/hau4.jpg"
import phone from "../assets/phone-call.png"
import email from "../assets/email.png"
import github from "../assets/github.png"
import user from "../assets/user.png"
import calendar from "../assets/calendar.png"
import gps from "../assets/gps.png"
const Header = () => {
    return (
        <div className='h-80  mx-auto flex justify-center max-w-full'>
            <div className="px-10 bg-green-200 w-1400 flex items-center">
                {/* avt */}
                <div className='rounded-full overflow-hidden mr-4' style={{ width: '250px', height: '250px' }}>
                    <img src={logo} alt='avatar' width={250} height={250} className="object-cover object-center rounded-full" />
                </div>
                {/* name  */}
                <div>
                    <p className='text-4xl font-bold'>PHAM VAN HAU</p>
                    <p className='text-2xl mx-l-100'>Developer Web</p>
                </div>
                {/* line  */}
                <div className="vertical-line mx-4"></div>
                {/*  */}
                <div className='mx-2'>
                    <div className='flex mx-b-30'>
                        <img src={phone} alt='icon-phone' />
                        <p className='font-bold mx-3'>037568441</p>
                    </div>
                    <div className='flex mx-b-30'>
                        <img src={email} alt='icon-email' />
                        <p className='font-bold mx-3'>phamvanhau692002vip@gmail.com</p>
                    </div>
                    <div className='flex mx-b-30'>
                        <a href='https://github.com/iamhaupv'><img src={github} alt='icon-github' /></a>
                        <a id="github" href='https://github.com/iamhaupv' className='font-bold mx-3'>https://github.com/iamhaupv</a>
                    </div>
                </div>
                {/*  */}
                <div className="vertical-line mx-4"></div>
                {/*  */}
                <div className='mx-2'>
                    <div className='flex mx-b-30'>
                        <img src={user} alt='icon-user' />
                        <p className='font-bold mx-3'>Male</p>
                    </div>
                    <div className='flex mx-b-30'>
                        <img src={calendar} alt='icon-calendar' />
                        <p className='font-bold mx-3'>06/09/2002</p>
                    </div>
                    <div className='flex mx-b-30'>
                        <img src={gps} alt='icon-gps' />
                        <p className='font-bold mx-3'>TBG Street, Ward 5, Go Vap District </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
