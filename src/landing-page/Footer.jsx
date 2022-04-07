import React from 'react';
import LogoBig from '../assets/footer/logo-big.png';
import Facebook from '../assets/footer/facebook.png';
import Instagram from '../assets/footer/instagram.png';
import Twitter from '../assets/footer/twitter.png';
import Whatsapp from '../assets/footer/whatsapp.png';
import Email from '../assets/footer/email.png';

function Footer() {
    return (
        <section class="w-full h-[451px] bg-[#F293933B] mt-20 px-[141px] py-10">
            <div class="w-full flex items-start space-x-8">
                <div class="flex flex-col space-y-6 flex-grow">
                    <img src={LogoBig} class="w-[292px] h-[104px]" alt="" srcset="" />
                    <p className='text-[#2F2E41B2] w-[253px]'>make your activity better than yesterday with us </p>
                </div>
                <div class="flex space-x-20 items-start justify-between">
                    <div class="flex flex-col space-y-4">
                        <h2 class="text-[30px] font-semibold text-[#2F2E41]">T-Chat</h2>
                        <ul className='space-y-[7px]'>
                            <li className='text-[#2F2E41B2] text-[16px]'>Feature</li>
                            <li className='text-[#2F2E41B2] text-[16px]'>Testiminials</li>
                            <li className='text-[#2F2E41B2] text-[16px]'>Price</li>
                            <li className='text-[#2F2E41B2] text-[16px]'>About Us</li>
                        </ul>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <h2 class="text-[30px] font-semibold text-[#2F2E41]">Policy</h2>
                        <ul className='space-y-[7px]'>
                            <li className='text-[#2F2E41B2] text-[16px]'>Privacy Policy</li>
                            <li className='text-[#2F2E41B2] text-[16px]'>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <h2 class="text-[30px] font-semibold text-[#2F2E41]">Lets Connect</h2>
                        <div class="flex space-x-4 items-center">
                            <img className='w-[31px]' src={Facebook} alt="" srcset="" />
                            <img className='w-[41px]' src={Instagram} alt="" srcset="" />
                            <img className='w-[31px]' src={Twitter} alt="" srcset="" />
                        </div>
                        <ul className='space-y-[11px]'>
                            <li class="flex space-x-4 items-center">
                                <img className='w-[41px]' src={Whatsapp} alt="" srcset="" />
                                <span className='text-[#2F2E41B2] text-[16px]'>0821 8942 8239</span>
                            </li>
                            <li class="flex space-x-4 items-center">
                                <img className='w-[31px]' src={Email} alt="" srcset="" />
                                <span className='text-[#2F2E41B2] text-[16px]'>customer service@tchat.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer