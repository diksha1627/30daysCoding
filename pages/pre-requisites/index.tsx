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
       <div className="flex border border-black border-2 top-10 relative rounded-[4rem] hover:shadow-2xl items-center sm:w-[25rem] h-[5rem] lg:w-[25rem] m-4 bg-[#FFFFCC]"
        >
          <div className="w-[6rem] h-[5rem] relative right-8 top-5">
            <Image src={pre} className="w-full h-full rounded-md " alt="" />

          </div>
          <div className="rounded-sm " >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
            PRE-REQUISITES
            </h5>
          </div>
        </div> 

        <div className='w-[20rem] lg:w-[32rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
            <Link href="#" className='text-[30px]  w-[70%] h-[5rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-4 border-black font-bold '> REACT </p>
            </Link>

            <Link href="#" className='lg:text-[30px] text-[20px]  w-[70%] h-[5rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-4 border-black font-bold '> WALKTHROUGH </p>
            </Link>
        </div>

        
       </div>

       <div className='flex flex-col  items-center'>
       <div className="flex border border-black border-2 top-10 relative rounded-[4rem] hover:shadow-2xl items-center sm:w-[25rem] h-[5rem] lg:w-[25rem] m-4 bg-[#FFFFCC]"
        >
          <div className="w-[6rem] h-[5rem] relative right-8 top-5">
            <Image src={notes} className="w-full h-full rounded-md " alt="" />

          </div>
          <div className="rounded-sm " >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
            LEARN FROM CHATGPT
            </h5>
          </div>
        </div> 
  
        <div className='w-[20rem] lg:w-[32rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
            <Link href="#" className='lg:text-[25px] text-[14px]   w-[90%] h-[5rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-4 border-black font-bold '>NEXT.JS DATA FETCHING DIFFERENCES</p>
            </Link>

            <Link href="#" className='lg:text-[25px] text-[15px]  w-[90%] h-[5rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-4 border-black font-bold '>NEXT.JS COURSE OUTLINE</p>
            </Link>
        </div>

        
       </div>

       
    </div>
    </div>

  )
}

export default index