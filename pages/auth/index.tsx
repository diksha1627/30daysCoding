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
       <div className="flex justify-center border border-black border-2  rounded-md hover:shadow-2xl items-center 
       w-[20rem] h-[5rem] lg:w-[32rem] m-4 bg-[#FFFFCC] relative top-4 p-4">
          <div className="rounded-sm " >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
            AUTH
            </h5>
          </div>
        </div> 

        <div className=' bg-[#FF9F00] w-[20rem] lg:w-[32rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
        <Link target="_blank" href="#" className='text-[20px]  w-[90%] bg-[#E6E6FA] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> GETTING STARTED </p>
            </Link>

            <Link target="_blank" href="#" className='lg:text-[20px] text-[20px]  w-[90%] bg-[#E6E6FA] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> EXAMPLE </p>
            </Link>

            <Link target="_blank" href="#" className='text-[20px]  w-[90%] bg-[#E6E6FA] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> AUTH WITH FIREBASE </p>
            </Link>

        </div>

         
       </div>

       <div className='flex flex-col  items-center'>
       <div className="flex border 
       justify-center border-black border-2 rounded-[4rem] 
       hover:shadow-2xl 
       items-center sm:w-[25rem] h-[5rem] lg:w-[25rem] m-4 bg-[#FFFFCC] p-2"
        >
            <div className="sm:text-[20px] 
            font-bold  text-gray-900 flex justify-center items-center">
            <p>CONTEXT, REDUCER, ACTION,REDUX</p> 
            </div>
        </div> 
  
        <div className='bg-[#E75480] w-[20rem] lg:w-[32rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
        <Link target="_blank" href="https://react.dev/learn/extracting-state-logic-into-a-reducer" className='text-[13px] bg-[#8A2BE2] text-white w-[90%] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> EXTRACTING STATE LOGIC INTO REDUCER </p>
            </Link>

            <Link target="_blank" href="https://vercel.com/guides/react-context-state-management-nextjs" className='text-[15px] bg-[#8A2BE2] text-white w-[90%] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> Using React Context for State in Next.js</p>
            </Link>

            <Link target="_blank" href="https://react.dev/learn/scaling-up-with-reducer-and-context" className='text-[15px] bg-[#8A2BE2] text-white w-[90%] h-[3.3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> Scaling Up with Reducer and Context </p>
            </Link>

            <Link target="_blank" href="https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers" className='lg:text-[20px] text-[20px] bg-[#8A2BE2] text-white w-[90%] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> Redux Fundamentals </p>
            </Link>

            <Link target="_blank" href="https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/" className='lg:text-[20px] text-[20px] bg-[#8A2BE2] text-white w-[90%] h-[3.3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> What is Redux? </p>
            </Link>
           
        </div>

        
       </div>

       
    </div>
    </div>

  )
}

export default index