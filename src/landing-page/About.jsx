import React from 'react';
import Photo from '../assets/about/photo.png';
import Chat1 from '../assets/about/photo-chat-1.png';
import Chat2 from '../assets/about/photo-chat-2.png';
import Chat3 from '../assets/about/photo-chat-3.png';
import AboutCard from '../components/AboutCard';

function About() {
    return (
        <div class="h-screen flex justify-between w-full px-16 mt-[146px]" id="about">
            <div class="w-2/3 relative">
                <div class="relative">
                    <span class="bg-[#FAFF0033] h-[591px] w-[451px] absolute rounded-full -left-[60px] -top-[29px]"></span>
                    <span class="bg-[#FFB9B9] h-[591px] w-[451px] absolute rounded-full -left-[38px] -top-[29px]"></span>
                    <span class="bg-[#FAFF00CC] h-[591px] w-[451px] absolute rounded-full -left-[25px] -top-[17px]"></span>
                    <img src={Photo} alt="" class="h-[591px] w-[451px] absolute" srcset="" />
                </div>

                <div class="absolute left-1/2 flex flex-col top-8 space-y-[3.9rem]">
                    <AboutCard text="is the best service for your bussiness..." Image={Chat1} TranslateMin={true} />
                    <AboutCard text="is the best service for your bussiness..." Image={Chat2} TranslateMin={false} />
                    <AboutCard text="is the best service for your bussiness..." Image={Chat3} TranslateMin={true} />
                </div>
            </div>

            <div class="w-[25%] flex flex-col items-end space-y-[85px] text-right">
                <div class="flex flex-col space-y-[46px] items-end">
                    <h2 class="text-[48px] font-bold leading-snug">What TheySays About us?</h2>
                    <p class="text-[18px] text-gray-500 w-[209px] font-medium">make your activity better than yesterday with us because there is a
                        price there is quality</p>
                </div>
                <button class="px-16 py-3 rounded-full font-medium text-white bg-gradient-to-b from-primary via-primary to-secondary">Learn more</button>
            </div>
        </div>
    )
}

export default About