import React from 'react';
import gif1 from "../assets/shape4.gif"

const Contact = () => {
    return <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center mb-52 ' id='contact'>
        <dic className="container mx-auto ">

            <div className=''>

                <div className=' flex justify-center items-center mb-20'>
                    <img className='w-[100px] lg:w-[300px]' src={gif1} />
                </div>

                <div className='text-white text-center '>
                    <div className='mb-6 text-3xl lg:text-5xl font-thin text-blue-300'>
                        <h1 >Contact me</h1>
                    </div>
                    <div className='my-4 text-4xl lg:text-xl font-semibold'>
                        <span >Luis Angel Manzo</span>
                    </div>

                    <p className='my-4'>
                        +52 664 234 7380
                    </p>

                    <p className='my-4'>
                        lmanzo@uabc.edu.mx
                    </p>

                    <div className='px-12  w-full flex justify-center mt-10 '>




                        <div className='group relative overflow-hidden w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-white/50 rounded-xl mx-3  '>


                            <a
                                href="https://github.com/luismz95"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group-hover:bg-black/50 w-full h-[100%] absolute z-40 transition-all duration-300 flex flex-col justify-center items-center '
                            >
                                <span className=" ">

                                    <img color='#ffffff' width={30} className="group-hover:scale-125 transition-all duration-500 invert" src='/github.svg' />
                                </span>

                                <p className={`text-sm opacity-50 my-2`}>
                                    Github
                                </p>
                            </a>

                        </div>

                        <div className='group relative overflow-hidden  w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-white/50 rounded-xl mx-3'>

                            <a
                                href="https://www.linkedin.com/in/luis-a-manzo-655130183/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group-hover:bg-blue-500/50 w-full h-[100%] absolute z-40 transition-all duration-300 flex flex-col justify-center items-center '
                                >
                                    <span className=" ">
                                    <img color='#ffffff' width={30} className="group-hover:scale-125 transition-all duration-500 invert" src='/linkedin.svg' />
                                </span>

                                <p className={`text-sm opacity-50 my-2`}>
                                    Linkedin
                                </p>
                            </a>
                        </div>
                        <div className='group relative overflow-hidden  w-[100px] h-[100px] flex flex-col justify-center items-center border-2 border-white/50 rounded-xl mx-3'>

                            <a
                                href="https://twitter.com/luisangelmzo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group-hover:bg-cyan-300/50 w-full h-[100%] absolute z-40 transition-all duration-300 flex flex-col justify-center items-center '
                                >
                                    <span className=" ">

                                    <img color='#ffffff' width={30} className="group-hover:scale-125 transition-all duration-500 invert" src='/twitter.svg' />
                                </span>

                                <p className={`text-sm opacity-50 my-2`}>
                                    twitter
                                </p>
                            </a>
                        </div>




                    </div>


                </div>

            </div>



        </dic>


        {/* <a
          href="https://github.com/luismz95"
          className="group rounded-lg border border-white text-center "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={` text-2xl font-semibold`}>

            <span className="inline-block transition-transform group-hover:translate-y-[-5px] motion-reduce:transform-none">
              <img
                src="/github.svg"
                alt="Vercel Logo"
                width={30}
                height={24}
                priority
              />
            </span>
          </h2>
          <p className={`text-sm opacity-50`}>
            Github
          </p>
        </a> */}

    </ div>
};

export default Contact;