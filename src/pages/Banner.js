import React from 'react';

import image1 from "../assets/me.png"
import gif1 from "../assets/shape.gif"

const Banner = () => {
    return <div className='min-h-[75vh] lg:min-h-[100vh] flex items-center ' id='home'>
        <dic className="container mx-auto">

            <div className='flex flex-col-reverse lg:flex-row justify-center lg:items-center  mx-10 lg:mx-2'>

                <div className='text-center lg:text-left lg:ml-9 text-white'>
                    <h2 className="mb-2 text-3xl lg:text-5xl font-thin ">
                        Hello!
                    </h2>
                    <h1 className='mb-8 text-3xl lg:text-7xl font-semibold gradient-text h-[78px]'>
                        I'm Luis Angel
                    </h1>

                    <p><strong >Backend</strong> and  <strong >Frontend</strong> developer with more than 6 years of experience,</p>
                    <p>passionate about learning new technologies to continue growing.</p>

                </div>
                <div className=' flex justify-center items-center '>
                    <img className='w-[200px] lg:w-[600px]' src={gif1} />
                </div>
            </div>
        </dic>

    </ div>
};

export default Banner;