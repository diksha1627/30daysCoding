import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className=' w-screen h-screen mt-[-1rem]  flex justify-center items-center'>
    <div className="w-[80%] lg:ml-[16rem] h-[80%]  gap-10 flex flex-col items-center  bg-[#004d8f] rounded-lg mt-24  " >

    <div className="rounded-sm mt-10 p-4" >
            <Link href="https://nas.io/30dayscoding" target="_blank" className=" lg:text-[35px] sm:text-[25px]  tracking-tight text-gray-100 dark:text-white border-b-2">
            Join the portal - https://nas.io/30dayscoding
            </Link>
          </div>
       
    <div className="rounded-sm " >
            <h5 className=" lg:text-[85px] sm:text-[35px] font-bold tracking-tight text-gray-300 dark:text-white">
              Book 1 on 1
            </h5>
          </div>

          <div className='flex gap-6 flex-col lg:flex-row '>
              
              <Link  href="https://calendly.com/aryansingh2/1?month=2023-08" target="_blank" className='text-[20px]  
              lg:text-[30px]  sm:h-[4rem] font-bold w-[17rem] lg:h-[7rem] 
              rounded-[5rem] bg-[#87CEEB] flex justify-center items-center' >Aryan</Link>

              <Link  href="https://calendly.com/itsudhwani1/15min?month=2023-08"  target="_blank"
              className='text-[20px] lg:text-[30px] flex justify-center items-center 
              sm:h-[4rem] font-bold w-[17rem] lg:h-[7rem] rounded-[5rem] bg-[#87CEEB]' >Deepanshu</Link>


          </div>

          
    </div>
    </div>

  )
}

export default index
 