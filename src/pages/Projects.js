import React from 'react';
import mino from "../assets/mino.png"
import gif3 from "../assets/shape3.gif"

const Contact = () => {
    return <div className='min-h-[85vh] lg:min-h-[100vh] flex flex-col ' id="projects">

        

            <div className='mb-6 text-3xl lg:text-5xl font-thin text-blue-300  w-full text-center mt-20'>
                <p >Porjects</p>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center  w-full px-10'>



                <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 '>
                    <div className='group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={mino} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>Mino Logistics Web App</div>
                </div>

                <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                    <div className='group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={mino} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>Mino Logistics Web App</div>
                </div>

                <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 '>
                    <div className='group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={mino} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>Mino Logistics Web App</div>
                </div>


            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center  w-full px-10'>

                <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 '>
                    <div className='group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={mino} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>Mino Logistics Web App</div>
                </div>

                <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                    <div className='group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={mino} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>Mino Logistics Web App</div>
                </div>

                <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 '>
                    <div className='group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={mino} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>Mino Logistics Web App</div>
                </div>
            </div>

      
        {/* <div className=' w-full flex justify-center items-center my-28 '>
            <img className='w-[200px] lg:w-[500px] ' src={gif3}  />
            </div> */}
    </ div>
};

export default Contact;