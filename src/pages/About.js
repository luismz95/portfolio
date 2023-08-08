import React from 'react';
import image1 from "../assets/me.png"

const About = () => {
    return <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center ' id='about'>
        <dic className="container mx-auto">

            <div className='flex flex-col lg:flex-row justify-center gap-y-8 lg:items-center lg:gap-x-12'>

                <div className='w-full flex justify-center' >
                    <img className='w-[200px] lg:w-[1200px] ' src={image1}   />
                </div>

                <div className='text-center lg:text-left lg:ml-9 text-white mx-10 lg:mx-2'>
                    <div className='mb-6 text-3xl lg:text-5xl font-thin text-blue-300'>
                        <h1 >About</h1>
                    </div>
                    <div className='mb-8 text-4xl lg:text-5xl font-semibold'>
                        <span >Luis Angel Manzo</span>
                    </div>

                    <p className='my-4'>
                    I discovered the world of programming since high school, I always wondered how things work, I have asked myself that question since I was a child and with programming I have been able to realize many things, how the future is getting closer to us. as we have imagined and all thanks to technology that does not stop.               
                    </p>

                    <p className='my-4'>
                    I am a person who always likes to improve himself, I am always willing to learn something new and to understand how things around us work.
                    </p>


                    <p className='my-4'>
                    I love innovation, technology and making things easier for others and making a better world for everyone.
                    </p>



                </div>
         
            </div>


        
        </dic>

    </ div>
};

export default About;