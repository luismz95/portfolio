import React from 'react';
import mino from "../assets/projects/mino.png"
import maypa from "../assets/projects/maypa.png"
import sedena from "../assets/projects/sedena.png"

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
  ];
  

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
                    <img className='group-hover:scale-125 transition-all duration-500' src={maypa} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>MAYPA payment gateway
</div>
                </div>


                <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl mx-4 my-4'>
                    <div className='group-hover:bg-white/20 w-full h-full absolute z-40 transition-all duration-300'></div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={sedena} width={500} />
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>SEDENA App</div>
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




<div className="grid grid-cols-2 lg:grid-cols-9 gap-1 mt-6 px-20">
      {technologies.map((tech, index) => (
        <div key={index} className="group flex flex-col items-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-16 h-16 object-contain"
          />
          <span className="mt-2 text-center text-sm group-hover:text-blue-500">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
    </ div>
};

export default Contact;