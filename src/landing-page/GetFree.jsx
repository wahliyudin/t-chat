import React from 'react'

function GetFree() {
    return (
        <div class="w-full flex flex-col space-y-10 items-center mt-[191px]">
            <div class="flex flex-col space-y-16 w-full items-center">
                <div class="flex flex-col items-center">
                    <h1 class="text-[48px] font-bold">Get Try For Free</h1>
                    <p className='font-medium text-[18px]'>make your activity better than yesterday with us</p>
                </div>
                <div class="flex rounded-xl py-0.5 px-0.5 bg-gradient-to-b from-primary to-secondary w-[588px] h-[83px]">
                    <div class="flex items-center bg-white rounded-xl py-1 px-1 w-full">
                        <input type="text" class="border-0 px-[54px] rounded-xl outline-none h-full flex-grow" placeholder="Your Email Here" />
                        <button class="text-white bg-gradient-to-b w-[166px] h-[70px] from-primary to-secondary px-4 py-4 rounded-[20px] font-bold text-[20px]">Try For Free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetFree