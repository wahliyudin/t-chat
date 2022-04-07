import React from 'react'

export default function AboutCard({ text, Image, TranslateMin }) {
    return (
        <div class={`rounded-3xl pl-12 pr-[19px] py-[23px] border border-primary bg-white flex justify-between items-start w-[432px] h-[107px] ${TranslateMin ? '-translate-x-10' : 'translate-x-10'}`}>
            <p class="text-[16px] font-medium">{text}</p>
            <img src={Image} class="h-[70px] w-[70px]" alt="" srcset="" />
        </div>
    )
}
