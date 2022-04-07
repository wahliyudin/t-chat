import React from 'react';
import Logo from '../assets/logo.png';
import ButtonGradient from '../components/ButtonGradient';
import ButtonGradientBorder from '../components/ButtonGradientBorder';
import NavLink from '../components/NavLink';

function Navbar() {
    return (
        <div className="flex justify-between items-center px-[18px]">
            <img src={Logo} alt="" srcset="" style={{ width: '116px', height: '39px' }} />
            <div className="flex space-x-20 items-center mt-[7px]">
                <ul className='flex items-center space-x-[2.6rem]'>
                    <li>
                        <NavLink title="Home" link="/" />
                    </li>
                    <li>
                        <NavLink title="Feature" link="/" />
                    </li>
                    <li>
                        <NavLink title="Testimonials" link="/" />
                    </li>
                    <li>
                        <NavLink title="Contuct Us" link="/" />
                    </li>
                </ul>
                <div className="flex space-x-[1.35rem] items-center">
                    <ButtonGradientBorder customClass="py-[9px] px-[43px] font-medium">Login</ButtonGradientBorder>
                    <ButtonGradient customClass="py-[11px] px-[36px] font-medium">Sign Up</ButtonGradient>
                </div>
            </div>
        </div>
    )
}

export default Navbar;