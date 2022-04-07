import React from 'react'
import ButtonGradient from '../components/ButtonGradient';
import ChatEmail from '../assets/hero/chat-email.png';
import Profile1 from '../assets/hero/profile-1.png';
import Profile2 from '../assets/hero/profile-2.png';
import Profile3 from '../assets/hero/profile-3.png';
import Chat from '../assets/hero/chat.png';
import Camera from '../assets/hero/camera.png';
import Photo from '../assets/hero/photo.png';
import Google from '../assets/hero/google.png';
import Microsoft from '../assets/hero/microsoft.png';
import Facebook from '../assets/hero/Facebook.png';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div class="flex flex-col container mx-auto px-[29px] h-screen" id="home">
            <div class="flex items-start mt-20 space-x-6 h-full">
                <div class="flex flex-col space-y-24 mt-10 justify-center w-1/2">
                    <div class="flex flex-col space-y-8 mt-[51px]">
                        <motion.h1 style={{ fontSize: '48px', width: "565px" }} class="capitalize font-bold leading-snug"
                            initial={{ x: '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        >
                            Enjoy Communication With Your Community
                        </motion.h1>

                        <p style={{ width: '452px' }}>make your activity better than yesterday with us because there is a price there is quality</p>
                    </div>
                    <div class="flex space-x-[1.6rem] items-center">
                        <button className="bg-gradient-to-br from-secondary via-primary to-primary text-white rounded-[20px] py-[13px] px-[35.5px] font-medium text-[18px]">Get Started</button>

                        <a href="/" class="text-primary underline font-medium text-[18px]">Learn more</a>
                    </div>
                </div>

                <div class="flex justify-center items-start relative w-1/2 h-full">
                    <div class="relative h-1/2 w-full mt-28">
                        <span class="absolute bg-gradient-to-t from-primary to-secondary opacity-80 rounded-[1rem] h-[415px] w-[335px] right-[4rem] -top-8"></span>
                        <span class="absolute bg-gradient-to-t from-primary to-secondary opacity-80 rounded-[1rem] h-[420px] w-[346px] right-[6.5rem] top-0"></span>
                        <img src={ChatEmail} class="absolute -top-[150px] left-[24.3%] h-[83px] w-[84.6px]" alt="" />
                        <img src={Profile1} class="absolute right-[7rem] -top-[4.5rem] w-[78px]" alt="" />
                        <motion.div class="absolute -left-[15px] -top-[21px]"
                            initial={{ y: '-50%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        >
                            <img src={Chat} class="w-[210px] h-[114.5px]" alt="" />
                            <div class="flex space-y-3 flex-col absolute top-8 left-4">
                                <span class="w-40 h-1 bg-white rounded-full"></span>
                                <span class="w-32 h-1 bg-white rounded-full"></span>
                                <span class="w-40 h-1 bg-white rounded-full"></span>
                            </div>
                        </motion.div>
                        <img src={Profile2} class="absolute w-[78px] left-4 top-1/3 mt-[28px]" alt="" />
                        <img src={Camera} class="absolute -right-[1rem] h-[44px] w-[52px] top-[20px]" alt="" />
                        <img src={Profile3} class="absolute w-[79px] h-[78px] right-[10px] top-[70%]" alt="" />
                        <div style={{ width: '700px', height: '490px', backgroundImage: `url(${Photo})` }} className="absolute bg-cover flex -right-20 -bottom-[185px]">
                        </div>
                    </div>
                </div>
            </div>
            <div class="pl-[33px] pr-8 rounded-r-full rounded-l-md bg-white w-[1065px] flex items-center space-x-8 translate-y-[84px]">
                <span class="text-[#2F2E4180] text-[30px] text-xl font-semibold my-[58px]">Support By</span>
                <div class="flex items-center space-x-4">
                    <img src={Google} class="h-[57px] w-[171px]" alt="" />
                    <img src={Microsoft} class="h-[120px]" alt="" />
                    <img src={Facebook} class="h-[57px] w-[251px]" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero