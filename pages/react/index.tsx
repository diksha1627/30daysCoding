import React from 'react';
import Image from 'next/image';
import react2 from '../../assests/notes.png'
import Link from 'next/link';
const index = () => {
  return (
    <div className='sm:ml-64 w-[82vw] mt-[-2rem]  lg:h-[80vh] h-screen'>
    <div className=" w-full h-full  flex flex-col items-center  rounded-lg mt-24 pl-[5rem] " >



      <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center sm:w-[25rem] h-[7rem] lg:w-[30rem] m-4 bg-[#FFFFCC]"
      >
        <div className="w-[6rem] h-[5rem] relative right-8">
          <Image src={react2} className="w-full h-full rounded-md " alt="" />

        </div>
        <div className="rounded-sm " >
          <h5 className=" lg:text-[50px] sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
            LEARN REACT
          </h5>
        </div>
      </div> 

      <div className="flex flex-col gap-3  rounded-lg  items-center sm:w-[30rem] md:w-[35rem] lg:w-[60rem] h-auto m-4 "
      >
      
      <Link  target="_blank" href="https://react.dev/" className='w-full flex justify-center 
      items-center border-2 border-black hover:shadow-2xl rounded-md p-2 bg-[#9ff4a3]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>GETTING STARTED</p>
      </Link>
      <Link  target="_blank" href="https://react.dev/learn/installation" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-md p-2 bg-[#FFA500]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>INSTALLATION</p>
      </Link>

      <Link  target="_blank" href="https://legacy.reactjs.org/docs/introducing-jsx.html" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-md p-2 bg-[#FFB6C1]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>INTRODUCING JSX</p>
      </Link>

      <Link  target="_blank" href="https://www.geeksforgeeks.org/why-are-fragments-better-than-container-divs/" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-md p-2 bg-[#ADD8E6]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>WHY ARE FRAGMENTS BETTER THAN CONTAINER DIVS?</p>
      </Link>

      <Link  target="_blank" href="https://react.dev/learn/your-first-component" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-md p-2 bg-[#FFA500]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>YOUR FIRST COMPONENT</p>
      </Link>

      
      <Link  target="_blank" href="https://react.dev/learn/passing-props-to-a-component" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-md p-2 bg-[#9ff4a3]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>PASSING PROPS TO A COMPONENT</p>
      </Link>

      <Link  target="_blank" href="https://legacy.reactjs.org/docs/hooks-effect.html" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-md p-2 bg-[#FFB6C1]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>USING THE EFFECT HOOK</p>
      </Link>

       
      </div> 

      </div>
      </div> 
  )
}

export default index