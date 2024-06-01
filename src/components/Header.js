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
        <div className='h-80  mx-auto flex justify-center border border-solid border-black border-2 max-w-full'>
            <div className="px-10 bg-green-200 border-solid border-2 w-1400 flex items-center">
                <div className='rounded-full overflow-hidden mr-4' style={{ width: '250px', height: '250px' }}>
                    <img src={logo} alt='avatar' width={250} height={250} className="object-cover object-center rounded-full" />
                </div>
                <div>
                    <p className='text-4xl font-bold'>PHAM VAN HAU</p>
                    <p className='text-2xl mx-l-20'>BackEnd</p>
                </div>
                <div className="vertical-line mx-5"></div>
                <div className='mx-5'>
                    <div className='flex mx-b-30'>
                        <img src={phone} alt='icon-phone' />
                        <p className='font-bold mx-3'>037568441</p>
                    </div>
                    <div className='flex mx-b-30'>
                        <img src={email} alt='icon-email' />
                        <p className='font-bold mx-3'>phamvanhau692002vip@gmail.com</p>
                    </div>
                    <div className='flex mx-b-30'>
                        <img src={github} alt='icon-github' />
                        <a href='https://github.com/longsoisuaxe1a' className='font-bold mx-3'>https://github.com/longsoisuaxe1a</a>
                    </div>
                </div>
                <div className="vertical-line mx-2"></div>
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
