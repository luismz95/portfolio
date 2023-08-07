import React from 'react';
import image1 from "../assets/me.png"

const About = () => {
    return <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center mt-11 ' id='about'>
        <dic className="container mx-auto">

            <div className='flex flex-col lg:flex-row-reverse justify-center gap-y-8 lg:items-center lg:gap-x-12'>

                <div className='text-center lg:text-left lg:ml-9 text-white'>
                    <div className='mb-2 text-3xl lg:text-5xl font-thin'>
                        <h1 >Hello!</h1>
                    </div>
                    <div className='mb-8 text-5xl lg:text-7xl font-semibold'>
                        <span >I'm Luis Angel</span>
                    </div>

                    <p>
                        dksa kkd jskjdf kdk k asdjkasjdk dkaks djaksdakdkadjanjancc  njdnasj dnjsdnajsdn n jdsnj asn sjdn aksdnk nskdnak
                    </p>


                </div>
                <div className=' '>
                    <img src={image1} width={900} height={700}  />
                </div>
            </div>
        </dic>

    </ div>
};

export default About;