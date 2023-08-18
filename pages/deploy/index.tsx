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
        <div className='bg-[#008080] w-[20rem] lg:w-[25rem] h-[25rem] rounded-[15rem] border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
        <Link href="#" className='text-[30px] w-[70%] h-[5rem]  flex items-center justify-center'>
              <p className='font-bold '> DEPLOYING </p>
            </Link>
 

            <Link 
            href="https://firebase.google.com/docs/hosting/frameworks/nextjs" 
            className='text-[25px]   bg-[#D87093] w-[70%] h-[3.5rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-2 border-black font-bold '> FIREBASE </p>
            </Link>

            <Link href="https://vercel.com/" className=' bg-[#D87093] lg:text-[25px] text-[20px]  w-[70%] h-[3.5rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-2 border-black font-bold '> VERCEL </p>
            </Link>
        </div>

        
       </div>

       <div className='flex flex-col  items-center'>
       <div className="flex border border-black border-2 
       rounded-md hover:shadow-2xl  justify-center  
       items-center w-[20rem] h-[5rem] lg:w-[25rem] m-4 bg-[#FFFFCC]">
        
          <div className="rounded-sm flexitems-center" >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white ">
            Complete apps + tutorial
            </h5>
          </div>
        </div> 
  
        <div className='bg-[#FF4500] w-[20rem] lg:w-[32rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
            <Link target="_blank" href="https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/" className='lg:text-[20px] text-[14px]   w-[90%]  bg-[#FFFFCC] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-2 border-black font-bold '>How to Build a Full Stack App</p>
            </Link>

            <Link target="_blank" href="https://www.freecodecamp.org/news/nextjs-firebase-tutorial-build-an-evernote-clone/" className='lg:text-[20px] text-[15px]  w-[90%]  bg-[#FFFFCC] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-2 border-black font-bold '>How to Build an Evernote Clone</p>
            </Link>

            <Link target="_blank" href="https://blog.jarrodwatts.com/the-ultimate-guide-to-firebase-with-nextjs" className='lg:text-[20px] text-[15px]  w-[90%]  bg-[#FFFFCC] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-2 border-black font-bold '>The Ultimate Guide</p>
            </Link>

            <Link target="_blank" href="https://egghead.io/lessons/react-initialize-a-next-js-9-project-with-typescript" className='lg:text-[20px] text-[15px]  w-[90%]  bg-[#FFFFCC] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='border-b-2 border-black font-bold '>Introduction to Nextjs 9</p>
            </Link>
        </div>

        
       </div>

       
    </div>
    </div>

  )
}

export default index