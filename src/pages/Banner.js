import React from 'react';

import iss from "../assets/shape.gif"

const Banner = () => {
    return <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
        <dic className="container mx-auto">

            <div className='flex flex-col lg:flex-row justify-center gap-y-8 lg:items-center lg:gap-x-12'>

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
                    <img src={iss} width={900} height={700}  />
                </div>
            </div>
        </dic>

    </ div>
};

export default Banner;