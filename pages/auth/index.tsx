import React from 'react'
import Image from 'next/image'
import pre from '../../assests/pre.png'
import notes from '../../assests/notes.png'
import Link from 'next/link'
const index = () => {
  return (
    <div className='sm:ml-64 w-[82vw] mt-[-2rem]  lg:h-[80vh] h-screen'>
      <div className=" w-full h-full  flex flex-col  gap-10 lg:flex-row items-center  rounded-lg mt-24 pl-[5rem] " >

       <div className='flex flex-col  items-center'>
       <div className="flex border border-black border-2  rounded-md hover:shadow-2xl items-center 
       sm:w-[25rem] h-[5rem] lg:w-[32rem] m-4 bg-[#FFFFCC] relative top-4">
          <div className="rounded-sm " >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
            AUTH
            </h5>
          </div>
        </div> 

        <div className='w-[20rem] lg:w-[32rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
        <Link target="_blank" href="#" className='text-[20px]  w-[90%] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> REACT </p>
            </Link>

            <Link target="_blank" href="#" className='lg:text-[20px] text-[20px]  w-[90%] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> WALKTHROUGH </p>
            </Link>

            <Link target="_blank" href="#" className='text-[20px]  w-[90%] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> REACT </p>
            </Link>

        </div>

        
       </div>

       <div className='flex flex-col  items-center'>
       <div className="flex border border-black border-2 rounded-[4rem] hover:shadow-2xl items-center sm:w-[25rem] h-[5rem] lg:w-[25rem] m-4 bg-[#FFFFCC]"
        >
            <div className="sm:text-[25px] font-bold  text-gray-900 flex justify-center items-center">
            <p>CONTEXT, REDUCER, ACTION,REDUX</p> 
            </div>
        </div> 
  
        <div className='w-[20rem] lg:w-[32rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
        <Link target="_blank" href="#" className='text-[20px]  w-[90%] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> REACT </p>
            </Link>

            <Link target="_blank" href="#" className='lg:text-[20px] text-[20px]  w-[90%] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> WALKTHROUGH </p>
            </Link>

            <Link target="_blank" href="#" className='text-[20px]  w-[90%] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> REACT </p>
            </Link>

            <Link target="_blank" href="#" className='lg:text-[20px] text-[20px]  w-[90%] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> WALKTHROUGH </p>
            </Link>

            <Link target="_blank" href="#" className='lg:text-[20px] text-[20px]  w-[90%] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> WALKTHROUGH </p>
            </Link>
           
        </div>

        
       </div>

       
    </div>
    </div>

  )
}

export default index