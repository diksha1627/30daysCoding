import React from 'react';
import Image from 'next/image';
import next2 from '../../assests/study.png'
import Link from 'next/link';
const index = () => {
  return (
    <div className='sm:ml-64 w-[82vw] mt-[-2rem]  lg:h-[80vh] h-screen'>
    <div className=" w-full h-full  flex flex-col lg:flex-row  items-center  rounded-lg mt-24 pl-[5rem] " >



      <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center sm:w-[25rem] h-[7rem] lg:w-[30rem] m-4 bg-[#FFFFCC]"
      >
        <div className="w-[6rem] h-[5rem] relative right-8">
          <Image src={next2} className="w-full h-full rounded-md " alt="" />

        </div>
        <div className="rounded-sm " >
          <h5 className=" lg:text-[30px] sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
           NEXT JS DOCS
          </h5>
        </div>
      </div> 

      <div className="flex flex-col gap-3  rounded-lg  items-center sm:w-[30rem] md:w-[35rem] lg:w-[60rem] h-auto m-4 "
      >
      
      <Link target="_blank" href="https://nextjs.org/docs/getting-started/react-essentials" className='w-full flex justify-center 
      items-center border-2 border-black hover:shadow-2xl rounded-[5rem] p-2 bg-[#9ff4a3]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>REACT ESSENTIALS</p>
      </Link>
      <Link target="_blank" href="#" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-[5rem] p-2 bg-[#FFA500]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>PAGE LAYOUTS</p>
      </Link>

      <Link target="_blank" href="https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-[5rem] p-2 bg-[#FFB6C1]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>DYNAMIC ROUTES</p>
      </Link>

      <Link target="_blank" href="https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-[5rem] p-2 bg-[#ADD8E6]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>LINKING AND NAVIGATING</p>
      </Link>

      <Link target="_blank" href="https://nextjs.org/docs/app/api-reference/functions" className='w-full flex 
      justify-center items-center border-2 border-black hover:shadow-2xl
       rounded-[5rem] p-2 bg-[#FFA500]'>
          <p className='border-b-2 border-black sm:text-[13px] md:text-[22px] lg:text-[22px] font-bold '>FUNCTIONS</p>
      </Link>

    

       
      </div> 

      </div>
      </div> 
  )
}

export default index