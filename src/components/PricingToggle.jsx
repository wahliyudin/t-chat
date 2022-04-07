import React from 'react'

export default function PricingToggle() {
    return (
        <div class="rounded-full overflow-hidden w-[286px] h-[50px] bg-gradient-to-b from-primary to-secondary py-0.5 px-0.5">
            <div class="flex items-center rounded-full h-full bg-white">
                <span class="text-primary flex justify-center items-center w-[50%] font-medium text-[18px]">Monthly</span>
                <span class="flex justify-center items-center w-[50%] h-full text-white bg-gradient-to-b rounded-[1.5rem] from-primary to-secondary font-medium text-[18px]">Yearly</span>
            </div>
        </div>
    )
}
