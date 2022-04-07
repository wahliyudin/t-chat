import React from 'react';
import Bg1 from '../assets/feature/card-1/bg.png';
import Camera from '../assets/feature/card-1/camera.png';
import Chat from '../assets/feature/card-2/chat.png';
import Bg2 from '../assets/feature/card-3/bg.png';
import Globe from '../assets/feature/card-3/globe.png';
import FeatureCard from '../components/FeatureCard';

function Feature() {
    return (
        <div class="container mx-auto px-[29px] h-screen w-screen flex flex-col items-start space-y-[3.8rem] mt-[195px]" id="feature">
            <div class="flex flex-col space-y-[1.4rem]">
                <h1 class="text-5xl font-bold">The Best Feature For You</h1>
                <div className="flex flex-col font-medium text-[18px] text-[#222222CC]">
                    <span>make your activity better than yesterday with us</span>
                    <span>make your activity better than yesterday with</span>
                </div>
            </div>
            <div class="flex space-x-16 w-full items-center">
                <FeatureCard Bg={Bg1} Icon={Camera} />
                <FeatureCard Icon={Chat} Translate={true} />
                <FeatureCard Bg={Bg2} Icon={Globe} />
            </div>
        </div>
    )
}

export default Feature