import React from 'react'
import ButtonGradient from './ButtonGradient'
import ButtonGradientBorder from './ButtonGradientBorder'

export default function FeatureCard({ Bg, Icon, Translate = false }) {
    return (
        <div class={`w-[352px] h-[461px] bg-white rounded-2xl py-8 flex flex-col space-y-10 items-center ${Translate && ' -translate-y-5 shadow-2xl'}`}>
            {Bg ? (
                <div class="relative">
                    <img src={Bg} alt="" />
                    <img src={Icon} class="absolute top-8 left-10" alt="" />
                </div>
            ) : (
                <img src={Icon} alt="" />
            )}
            <span class="font-bold text-[24px] text-[#222222]">Video call</span>
            <div class="flex flex-col text-center text-sm">
                <span>make your activity</span>
                <span>better than yesterday</span>
                <span>with us</span>
            </div>
            {Translate ? (
                <button className="bg-gradient-to-br py-[10px] px-[61.5px] from-primary via-primary to-secondary text-white rounded-full">Learn more</button>
            ) : (
                <ButtonGradientBorder customClass="py-[10px] px-[61.5px]">Learn more</ButtonGradientBorder>
            )}
        </div>
    )
}
