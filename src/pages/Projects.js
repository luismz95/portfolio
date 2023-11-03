import React from 'react';
import mino from "../assets/projects/mino.png"
import minomx from "../assets/projects/minomx.png"
import minoapps from "../assets/projects/minoapps.png"
import maypa from "../assets/projects/maypa.png"
import sedena from "../assets/projects/sedena.png"
import rcc from "../assets/projects/rcc.png"
import fish from "../assets/projects/happyfish.png"
import catalogo from "../assets/projects/catalogo.png"
import astra from "../assets/projects/astra.png"


import gif3 from "../assets/shape3.gif"

const technologies = [
    { name: "Java", icon: "java.svg" },
    { name: "C++", icon: "cplusplus.svg" },
    { name: "Visual Basic", icon: "visualbasic.svg" },
    { name: "C#", icon: "csharp.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "HTML5", icon: "html.svg" },
    { name: "CSS3", icon: "css.svg" },
    { name: "Android", icon: "android.svg" },
    { name: "jQuery", icon: "jquery.svg" },
    { name: "React", icon: "react.svg" },
    { name: "React Native", icon: "react.svg" },
    { name: "Ajax", icon: "ajax.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "Express", icon: "express.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "WordPress", icon: "wordpress.svg" },
    { name: "Mongo DB", icon: "mongo.svg" },
    { name: "SQL", icon: "mysql.svg" },
    { name: "Tailwind", icon: "tailwind.svg" },
    { name: "Python", icon: "python.svg" },
];


const Contact = () => {
    return <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center ' id='projects'>
        <div className="container mx-auto">

            <div className='flex flex-col  '>


                <div className='mb-6 text-3xl lg:text-5xl font-thin text-blue-300  w-full text-center mt-20'>
                    <p >Projects</p>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center '>

                    <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 '>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={mino} width={500} />
                        <p className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50  text-stone-600 font-bold'>Mino Logistics Web App - 2023</p>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-2">
                                <img
                                    src={"mongo.svg"}
                                    alt={"js"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"express.svg"}
                                    alt={"bs"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"react.svg"}
                                    alt={"rc"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"nodejs.svg"}
                                    alt={"node"}
                                    className="w-10 h-10 object-contain"
                                />


                                <img
                                    src={"tailwind.svg"}
                                    alt={"wordpress"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"nextjs.svg"}
                                    alt={"Next JS"}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>
                    </div>


                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img
                            className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={minomx}
                            alt='RCC Construction Inc Web'
                        />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            WEB MINO - 2022
                        </div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-3">
                                <img
                                    src={"nextjs.svg"}
                                    alt={"html"}
                                    className="w-10 h-10 object-contain"
                                />


                                <img
                                    src={"react.svg"}
                                    alt={"bs"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"tailwind.svg"}
                                    alt={"css"}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>

                    </div>


                    <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 '>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={minoapps} width={500} height={700} />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold'>Mino Android/IOS Apps - 2022</div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-1">
                                <img
                                    src={"react.svg"}
                                    alt={"html"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"mongo.svg"}
                                    alt={"css"}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center w-full '>


                    <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={maypa} width={500} />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold'>MAYPA payment gateway - 2021
                        </div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-2">
                                <img
                                    src={"html.svg"}
                                    alt={"html"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"css.svg"}
                                    alt={"css"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"javascript.svg"}
                                    alt={"js"}
                                    className="w-10 h-10 object-contain"
                                />

                                <img
                                    src={"php.svg"}
                                    alt={"php"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"mysql.svg"}
                                    alt={"sql"}
                                    className="w-10 h-10 object-contain"
                                />

                            </div>
                        </div>
                    </div>

                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img
                            className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={rcc}
                            alt='RCC Construction Inc Web'
                        />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            RCC Construction Inc Web - 2021
                        </div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-1">
                                <img
                                    src={"html.svg"}
                                    alt={"html"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"css.svg"}
                                    alt={"css"}
                                    className="w-10 h-10 object-contain"
                                />

                                <img
                                    src={"bootstrap.svg"}
                                    alt={"bs"}
                                    className="w-10 h-10 object-contain"
                                />

                            </div>
                        </div>

                    </div>

                    <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={sedena} width={500} />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold'>SEDENA App - 2021</div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-2">
                                <img
                                    src={"javascript.svg"}
                                    alt={"js"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"react.svg"}
                                    alt={"rc"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"mysql.svg"}
                                    alt={"node"}
                                    className="w-10 h-10 object-contain"
                                />

                                <img
                                    src={"css.svg"}
                                    alt={"css"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"java.svg"}
                                    alt={"java"}
                                    className="w-10 h-10 object-contain"
                                />

                                <img
                                    src={"ajax.svg"}
                                    alt={"jx"}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center w-full '>


                    <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4 '>

                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={catalogo} width={500} height={700} />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600 font-bold'>Catalogue Web App - 2020</div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-1">
                                <img
                                    src={"html.svg"}
                                    alt={"html"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"css.svg"}
                                    alt={"css"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"javascript.svg"}
                                    alt={"js"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"bootstrap.svg"}
                                    alt={"bs"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"wordpress.svg"}
                                    alt={"wordpress"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"mysql.svg"}
                                    alt={"mysql"}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>

                    </div>

                    <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={fish} width={500} />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600  font-bold'>Flappy Bird Video Game - 2019</div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-1">

                                <img
                                    src={"csharp.svg"}
                                    alt={"csharp"}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                        <div className='group-hover:bg-white/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500 w-[300px] h-48 md:w-92 md:h-60 lg:w-[500px] lg:h-72 object-cover'
                            src={astra} width={500} />
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-stone-600  font-bold'>SmartSale - 2017</div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50 text-stone-600 font-bold'>
                            <div className="group flex flex-row items-center gap-x-1">

                                <img
                                    src={"csharp.svg"}
                                    alt={"csharp"}
                                    className="w-10 h-10 object-contain"
                                />
                                <img
                                    src={"mysql.svg"}
                                    alt={"mysql"}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>
                    </div>


                </div>



                {/* <div className=' w-full flex justify-center items-center my-28 '>
            <img className='w-[200px] lg:w-[500px] ' src={gif3}  />
            </div> */}




                <div className="grid grid-cols-2 lg:grid-cols-11 gap-y-10 mt-16 ">
                    {technologies.map((tech, index) => (
                        <div key={index} className="group flex flex-col items-center transition-transform transform hover:scale-105">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-16 h-16 object-contain"
                            />
                            <span className="mt-2 text-center text-sm group-hover:text-blue-500 duration-500 text-white">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
};

export default Contact;