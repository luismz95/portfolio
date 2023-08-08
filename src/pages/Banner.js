import React from 'react';

import image1 from "../assets/me.png"
import gif1 from "../assets/shape.gif"

const Banner = () => {
    return <div className='min-h-[75vh] lg:min-h-[100vh] flex items-center  ' id='home'>
        <dic className="container mx-auto">

            <div className='flex flex-col-reverse lg:flex-row justify-center lg:items-center  mx-10 lg:mx-2'>

                <div className='text-center lg:text-left lg:ml-9 text-white'>
                    <div className='mb-2 text-3xl lg:text-5xl font-thin'>
                        <h1 >Hello!</h1>
                    </div>
                    <div className='mb-8 text-3xl lg:text-7xl font-semibold'>
                        <span >I'm Luis Angel</span>
                    </div>

                    <p className='my-4'>
                        Backend and Frontend developer with more than 6 years of experience.
                    </p>
                    <p className='mt-4'>
                        Passionate about learning new technologies, in order to continue growing.
                    </p>


                </div>
                <div className=' flex justify-center items-center '>
                    <img className='w-[200px] lg:w-[600px]' src={gif1}  />
                </div>
            </div>
        </dic>

    </ div>
};

export default Banner;