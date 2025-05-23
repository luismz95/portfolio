import React from 'react';
import image1 from "../assets/me2.png"

const About = () => {
    return <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center ' id='about'>
        <dic className="container mx-auto">

            <div className='flex flex-col lg:flex-row justify-center gap-y-8 lg:items-center lg:gap-x-12 '>

              

                <div className='text-center  text-white'>
                
                    <div className='mb-8 text-4xl lg:text-5xl font-semibold mt-24'>
                        <span >Luis Angel Manzo</span>
                    </div>

                    <p className='my-4'>
                        I entered the world of programming during my high school years, driven by a persistent curiosity about how things work. This curiosity has been with me since childhood, and through programming, I've been able to turn my wonder into tangible accomplishments. It's incredible to witness how the future is rapidly approaching in ways we once only imagined, and this transformation is made possible by the relentless progression of technology.
                    </p>

                </div>

            </div>



        


        </dic>

    </ div>
};

export default About;