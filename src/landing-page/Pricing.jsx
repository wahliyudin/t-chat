import React from 'react'
import PricingCard from '../components/PricingCard'
import PricingToggle from '../components/PricingToggle'

function Pricing() {
    return (
        <div class="w-full flex flex-col mt-[114px] space-y-16 px-10">
            <div class="w-full flex justify-between items-start">
                <div class="flex flex-col space-y-2 w-1/2">
                    <h1 class="text-[48px] font-bold">The Best Pricing For Your Bussiness</h1>
                    <p class="text-[18px] w-[392px] font-medium">make your activity better than yesterday with us </p>
                </div>
                <PricingToggle />
            </div>

            <div class="flex items-center py-10 px-4 rounded-xl bg-white w-full">
                <PricingCard title="Basic" price="49" active={false} />
                <PricingCard title="Medium" price="99" active={false} />
                <PricingCard title="Popular" price="199" active={true} />
                <PricingCard title="Super" price="299" active={false} />
            </div>
        </div>
    )
}

export default Pricing