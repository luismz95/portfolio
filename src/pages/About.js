import React from 'react';
import image1 from "../assets/me2.png"

const About = () => {
    return <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center ' id='about'>
        <dic className="container mx-auto">

            <div className='flex flex-col lg:flex-row justify-center gap-y-8 lg:items-center lg:gap-x-12 '>

                <div className='w-full flex justify-center ' >
                    <img className='w-[200px] lg:w-[1000px] ' src={image1} />
                </div>

                <div className='text-center lg:text-left lg:ml-9 text-white mx-10 lg:mx-2'>
                    <div className='mb-6 text-3xl lg:text-5xl font-thin text-blue-300'>
                        <h1 >About</h1>
                    </div>
                    <div className='mb-8 text-4xl lg:text-5xl font-semibold'>
                        <span >Luis Angel Manzo</span>
                    </div>

                    <p className='my-4'>
                        I entered the world of programming during my high school years, driven by a persistent curiosity about how things work. This curiosity has been with me since childhood, and through programming, I've been able to turn my wonder into tangible accomplishments. It's incredible to witness how the future is rapidly approaching in ways we once only imagined, and this transformation is made possible by the relentless progression of technology.
                    </p>

                </div>

            </div>



            {/* <h1 class="text-2xl text-center mb-8">Mi Trayectoria Profesional</h1>

            <div class="timeline">
            <div class="timeline-item">
                    <p>BAJANET</p>
                    <p>SEDENA APP</p>
                    <p>2020</p>
                </div>
                <div class="timeline-item">
                    <p>Maypa</p>
                    <p>Payment gateway</p>
                    <p>2021</p>
                </div>
                <div class="timeline-item">
                    <p>Mino Logistics</p>
                    <p>Web App, Server App, App</p>
                    <p>2021-2023</p>
                </div>
            </div> */}


        </dic>

    </ div>
};

export default About;