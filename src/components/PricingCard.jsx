import React from 'react';
import ButtonGradientBorder from './ButtonGradientBorder';
import Check from '../assets/check.png';
import CheckWhite from '../assets/check-white.png';

export default function PricingCard({ title, price, active }) {
    return (
        <div class="w-1/4 relative">
            <div class={`flex flex-col justify-between w-[301px] items-center px-4 ${active ? 'bg-gradient-to-b from-[#F29393] via-[#f2ae93] to-[#f2c693] py-10 rounded-[20px] h-[511px] absolute -top-[300px]' : 'h-[404px]'}`}>
                <div class="flex flex-col space-y-4 items-center">
                    <h2 class={`text-[34px] font-semibold ${active ? 'text-white' : 'text-[#222222E5]'}`}>{title}</h2>
                    <span class={`text-[48px] font-bold ${active && 'text-white'}`}>{price}$</span>
                </div>
                <ul class="flex flex-col space-y-4">
                    <li class="flex space-x-6 text-gray-500 items-start">
                        <img src={!active ? Check : CheckWhite} alt="" />
                        <span class={`text-sm ${active && 'text-white'}`}>Chat Bot</span>
                    </li>
                    <li class="flex space-x-6 text-gray-500 items-start">
                        <img src={!active ? Check : CheckWhite} alt="" />
                        <span class={`text-sm ${active && 'text-white'}`}>Unlimited time</span>
                    </li>
                    <li class="flex space-x-6 text-gray-500 items-start">
                        <img src={!active ? Check : CheckWhite} alt="" />
                        <span class={`text-sm ${active && 'text-white'}`}>Up 5000 People Conference</span>
                    </li>
                    <li class="flex space-x-6 text-gray-500 items-start">
                        <img src={!active ? Check : CheckWhite} alt="" />
                        <span class={`text-sm ${active && 'text-white'}`}>Presentation Support</span>
                    </li>
                </ul>
                {active ? (
                    <button class="bg-white text-primary font-medium text-[18px] rounded-full w-[180px] h-[44px]">Learn more</button>
                ) : (
                    <ButtonGradientBorder customClass="py-2 px-8">Learn more</ButtonGradientBorder>
                )}
            </div>
        </div>
    )
}
