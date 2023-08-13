import React from 'react'

const index = () => {
  return (
    <div className=' w-screen h-screen mt-[-1rem]  flex justify-center items-center'>
    <div className="w-[80%] lg:ml-[16rem] h-[80%]  gap-10 flex flex-col items-center  bg-[#004d8f] rounded-lg mt-24  " >

    <div className="rounded-sm mt-10 p-4" >
            <h5 className=" lg:text-[35px] sm:text-[25px]  tracking-tight text-gray-100 dark:text-white">
            Join the portal - https://nas.io/30dayscoding
            </h5>
          </div>
       
    <div className="rounded-sm " >
            <h5 className=" lg:text-[85px] sm:text-[35px] font-bold tracking-tight text-gray-300 dark:text-white">
              Book 1 on 1
            </h5>
          </div>

          <div className='flex gap-6 flex-col lg:flex-row '>
              
              <button type="button" className='text-[20px]  lg:text-[30px]  sm:h-[4rem] font-bold w-[17rem] lg:h-[7rem] rounded-[5rem] bg-[#87CEEB]' >Aryan</button>

              <button type="button" className='text-[20px] lg:text-[30px]  sm:h-[4rem] font-bold w-[17rem] lg:h-[7rem] rounded-[5rem] bg-[#87CEEB]' >Deepanshu</button>


          </div>

          
    </div>
    </div>

  )
}

export default index
 