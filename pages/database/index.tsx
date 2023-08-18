import React from 'react'
import Image from 'next/image'
import pre from '../../assests/pre.png'
import notes from '../../assests/notes.png'
import Link from 'next/link'
const index = () => {
  return (
    <div className='sm:ml-64 w-[82vw] mt-[-2rem]  lg:h-[80vh] h-screen'>
      <div className=" w-full h-full  flex flex-col  gap-10 lg:flex-row items-center  rounded-lg mt-24 pl-[2rem] " >

       <div className='flex flex-col  items-center'>
       <div className="flex border justify-center border-black border-2 
       rounded-md hover:shadow-2xl items-center w-[15rem] h-[5rem] lg:w-[15rem] m-4 bg-[#FFFFCC]">
       
          <div className="rounded-sm " >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
           DATABASE
            </h5>
          </div>
        </div> 
        <div className='w-[20rem] lg:w-[23rem] h-[25rem] rounded-md border-2 bg-[#FFDC00] border-black flex-col gap-3 flex items-center justify-center'>
         
            <Link target="_blank" href="https://kenanbek.medium.com/using-firebase-and-firestore-in-a-next-js-application-a-step-by-step-tutorial-5a9f22df18cf" className='text-[20px] bg-[#89CFF0] w-[85%] h-[3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> Using Firebase and Firestore </p>
            </Link>

            <Link target="_blank" href="https://firebase.google.com/docs/firestore" className='lg:text-[20px] text-[20px]  w-[85%] h-[3rem] bg-[#89CFF0] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> Cloud Firestore </p>
            </Link>

            <Link target="_blank" href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs" className='text-[20px] bg-[#89CFF0] w-[85%] h-[3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> Use Supabase with Nextjs </p>
            </Link>

            <Link target="_blank" href="https://vercel.com/guides/using-databases-with-vercel" className='lg:text-[20px] text-[20px] bg-[#89CFF0] w-[85%] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> Using Database with Vercel </p>
            </Link>

            <Link target="_blank" href="https://vercel.com/guides/integrating-next-js-and-contentful-for-your-headless-cms" className=' bg-[#89CFF0]  lg:text-[20px] text-[20px]  w-[85%] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> Why Nextjs and React </p>
            </Link>
        </div>

        
       </div>


       <div className='flex flex-col  items-center'>
       <div className="flex border justify-center border-black border-2 
       rounded-md hover:shadow-2xl items-center w-[15rem] h-[5rem] lg:w-[15rem] m-4 bg-[#FFFFCC]">
       
          <div className="rounded-sm " >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
            GRAPH QL
            </h5>
          </div>
        </div> 
        <div className=' bg-[#FFF700] w-[20rem] lg:w-[23rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
            <Link target="_blank" href="https://www.airplane.dev/blog/graphql-vs-rest-apis-a-complete-guide" className='text-[20px] bg-[#89CFF0] w-[85%] h-[3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> GraphQL vs REST APIS </p>
            </Link>

            <Link target="_blank" href="https://github.com/aagam29/graphql-clients/tree/main" className='lg:text-[20px] bg-[#89CFF0] text-[20px]  w-[85%] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> graph ql-clients </p>
            </Link>

            <Link target="_blank" href="https://hygraph.com/blog/nextjs-graphql" className='text-[18px] bg-[#89CFF0] w-[85%] h-[3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> Fetch GraphQL Data in Nextjs </p>
            </Link>

            <Link target="_blank" href="https://github.com/aagam29/graphql-clients/blob/main/pages/fetch.jsx" className=' text-[16px] bg-[#89CFF0]  w-[85%] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> GraphQL-clients/pages/fetch.jsx </p>
            </Link>

            <Link target="_blank" href="https://www.airplane.dev/blog/how-to-build-a-graphql-api-with-next-js" className=' text-[17px] bg-[#89CFF0]  w-[85%] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> Build a GraphQl ApI with NextJs </p>
            </Link>

            <Link target="_blank" href="https://github.com/tomanagle/NextJS-NestJS-GraphQL-Starter" className='text-[19px] bg-[#89CFF0]  w-[85%] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '> Next hs-GraphQL-starter </p>
            </Link>
        </div>

        
       </div>


       <div className='flex flex-col  items-center'>
       <div className="flex border justify-center border-black border-2 
       rounded-md hover:shadow-2xl items-center w-[15rem] h-[5rem] lg:w-[15rem] m-4 bg-[#FFFFCC]">
       
          <div className="rounded-sm " >
            <h5 className="sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
            ORM-PRISMA
            </h5>
          </div>
        </div> 
        <div className='bg-[#FFDC00] w-[20rem] lg:w-[23rem] h-[25rem] rounded-md border-2 border-black flex-col gap-3 flex items-center justify-center'>
         
            <Link target="_blank" href="https://vercel.com/guides/nextjs-prisma-postgres" className='text-[17px] bg-[#89CFF0] w-[85%] h-[3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '> How to build a FullStack App </p>
            </Link>

            <Link target="_blank" href="https://www.prisma.io/nextjs" className='lg:text-[20px] text-[20px] bg-[#89CFF0]  w-[85%] h-[3rem] rounded-[5rem] border-2 border-black flex items-center justify-center'>
              <p className='font-bold '>PRISMA.IO</p>
            </Link>

            <Link target="_blank" href="https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices" className='text-[13.5px] bg-[#89CFF0] w-[85%] h-[3rem] rounded-[3rem] border-2 border-black flex items-center justify-center'>
              <p className=' font-bold '>Instantiting PrismaClient with Nextjs</p>
            </Link>

        </div>

        
       </div>

     

       
    </div>
    </div>

  )
}

export default index