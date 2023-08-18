import React from 'react'
import Image from 'next/image'
import live from '../../assests/live-streaming.png';
import next from '../../assests/next.png';
import react from '../../assests/react.png';
import Link from 'next/link';

const index = () => {
  return (
    <div className='sm:ml-64 w-[82vw] mt-[-2rem]  lg:h-[80vh] h-screen'>
      <div className=" w-full h-full  flex flex-col items-center  rounded-lg mt-24 pl-[5rem] " >



        <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center sm:w-[25rem] h-[7rem] lg:w-[30rem] m-4 bg-[#FFFFCC]"
        >
          <div className="w-[6rem] h-[5rem] relative right-8">
            <Image src={live} className="w-full h-full rounded-md " alt="" />

          </div>
          <div className="rounded-sm " >
            <h5 className=" lg:text-[50px] sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
              LIVE CLASSES
            </h5>
          </div>
        </div> 

        <div className='flex lg:flex-row flex-col'>
          <div className="flex 
          flex-col items-center border
           gap-6 border-black border-2 rounded-lg hover:shadow-2xl items-center h-[29rem] sm:w-[19rem] lg:w-[22rem] m-4 bg-[#FFDAB9]">

            <div className="rounded-sm flex flex-col items-center" >
              <Image src={next} className="w-20 h-20 mt-2 rounded-md " alt="" />

              <h3 className=" text-[35px] font-bold tracking-tight text-gray-900 dark:text-white">
                NEXT JS <br /> LIVE CLASS
              </h3>
            </div> 

            <div className="rounded-sm " >
              <h5 className=" text-[23px] font-bold tracking-tight text-gray-900 dark:text-white border-b-2  border-black">

                Slides: Next js Masterclass
              </h5>
            </div>
            <Link href="/#" className="rounded-2xl flex justify-center border border-2 border-black p-1 w-[15rem] bg-[#FF69B4]" >
              <h5 className=" text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">
                slides
              </h5>
            </Link>
          </div>


          <div className="flex 
          flex-col items-center border
           gap-6 border-black border-2 rounded-lg hover:shadow-2xl items-center h-[29rem] w-[22rem] m-4 bg-[#FFDAB9]">

            <div className="rounded-sm flex flex-col items-center" >

              <h3 className=" text-[35px] font-bold tracking-tight text-gray-900 dark:text-white">
                REACT JS <br /> LIVE CLASS 1
              </h3>
            </div>

            <div className="rounded-sm text-[20px] gap-1 flex flex-col" >
              Recording :
              <Link target="_blank"  href="https://www.youtube.com/watch?v=Z4KqABAT8hM&ab_channel=AryanSingh" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[16rem] bg-[#FF69B4]  border-b-2  border-black" >

                Youtube Recording
              </Link>
            </div>


            <div className="rounded-2xl flex flex-col text-[20px] gap-1 flex flex-col " >
              Code :
              <Link target="_blank"  href="https://gist.github.com/singh1aryan/a6bfe92fde849bee53ba64536b60c1fa" className=" text-[19px] rounded-2xl  flex justify-center font-bold border border-2 border-black p-1 w-[16rem] bg-[#FF69B4]">
                Part 1
              </Link>

              <Link target="_blank"  href="https://drive.google.com/drive/folders/1ND1pCkCCm3_MOYhINTLyLUws0BxJi9rX" className=" text-[19px] rounded-2xl  flex justify-center font-bold border border-2 border-black p-1 w-[16rem] bg-[#FF69B4]">
                Part 2
              </Link>
            </div>


            <div className="rounded-2xl flex flex-col text-[20px] gap-1 flex flex-col " >
              Slides :
              <Link target="_blank"  href="https://docs.google.com/presentation/d/1Z7glYr__t04r0OZQXXAFXR4UdIhoT87WnHGExNHiAKY/edit?pli=1#slide=id.p" className=" text-[19px] rounded-2xl  flex justify-center font-bold border border-2 border-black p-1 w-[16rem] bg-[#FF69B4]">
                slides
              </Link>
            </div>
          </div>

          <div className="flex 
          flex-col items-center border
           gap-6 border-black border-2 rounded-lg hover:shadow-2xl items-center h-[29rem] w-[22rem] m-4 bg-[#FFDAB9]">

            <div className="rounded-sm flex flex-col items-center" >
              <Image src={react} className="w-12 h-12 mt-2 rounded-md " alt="" />

              <h3 className=" text-[33px] font-bold tracking-tight text-gray-900 dark:text-white">
                REACT JS <br /> LIVE CLASS 2
              </h3>
            </div>

            <div className="rounded-sm text-[20px] gap-1 flex flex-col" >
              Recording :
              <Link target="_blank"  href="https://www.youtube.com/watch?v=bKbv0QuLxIc&ab_channel=AryanSingh" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[16rem] bg-[#FF69B4]  border-b-2  border-black" >

                Youtube Recording
              </Link>
            </div>


            <div className="rounded-2xl flex flex-col text-[20px] gap-1 flex flex-col " >
              Code :
              <Link target="_blank"  href="https://drive.google.com/drive/folders/1hYRyF5cAx2E_Wgjqg_7JWgTleLcFuSpQ" className=" text-[19px] rounded-2xl  flex justify-center font-bold border border-2 border-black p-1 w-[16rem] bg-[#FF69B4]">
                Part 1
              </Link>

            </div>


            <div className="rounded-2xl flex flex-col text-[20px] gap-1 flex flex-col " >
              Slides :
              <Link target="_blank"  href="https://docs.google.com/presentation/d/11arTH5nWxco8FwHNVUo2fMBX0EQMU52C27SoDdWFHPA/edit#slide=id.p" className=" text-[19px] rounded-2xl  flex justify-center font-bold border border-2 border-black p-1 w-[16rem] bg-[#FF69B4]">
                slides
              </Link>
            </div>

          
          </div>

       
        </div>








      </div>
    </div>

  )
}

export default index
