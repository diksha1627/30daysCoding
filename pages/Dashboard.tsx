import React from 'react'
import steps from '../assests/general.png'
import Image from 'next/image'
import aryan from '../assests/coaching.png';
import deepanshu from '../assests/teaching.png';
import resources from '../assests/resources.jpg';
import events from '../assests/Events.jpg';
import youtube from '../assests/youtube.jpg'
import live from '../assests/live-streaming.png';
import github from '../assests/github.png';
import react from '../assests/react.png';
import next from '../assests/next.png';
import pre from '../assests/pre.png';
import database from '../assests/database.png';
import auth from '../assests/authenticity.png';
import deploy from '../assests/deploy.png';
import dsa from '../assests/dsa.png';
const Dashboard = () => {
    return (
        <div className=" sm:ml-64 w-full  " >
        <div className="grid lg:grid-cols-4  gap-y-12 md:grid-cols-1 p-2   rounded-lg mt-24 " 
        style={{paddingLeft:"3.5rem"}} >


          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={steps} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[21px] font-bold tracking-tight text-gray-900 dark:text-white">
                  General Steps
                </h5>
            </div>
          </div>


          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={aryan} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[21px] font-bold tracking-tight text-gray-900 dark:text-white">
                  1:1 Aryan
                </h5>
            </div>
          </div>


          
          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={deepanshu} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[21px] font-bold tracking-tight text-gray-900 dark:text-white">
                  1:1 Deepanshu
                </h5>
            </div>
          </div>


          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={live} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                  Live Classes
                </h5>
            </div>
          </div>

          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[5rem] h-[4.5rem] relative right-8">
              <Image src={github} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">
                  Github Repos
                </h5>
            </div>
          </div>


          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[4.5rem] p-1 h-[4.5rem] relative right-8 bg-white border border-2 rounded-md border-black " >
              <Image src={react} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md  " >
              <h5 className=" text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">
                  Learn React
                </h5>
            </div>
          </div>


          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[5rem] h-[5rem] relative right-8 bg-white border border-2 rounded-md border-black " >
              <Image src={next} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                  Next Js Docs
                </h5>
            </div>
          </div>


          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[4.5rem] h-[5rem] relative right-8">
              <Image src={pre} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[21px] font-bold tracking-tight text-gray-900 dark:text-white">
                  Pre-requisites
                </h5>
            </div>
          </div>

          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={database} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
              Database , Graphql
                </h5>
            </div>
          </div>


          <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={auth} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
              Auth
                </h5>
            </div>
          </div>

          <div className="flex  border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={deploy} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                Deploying apps 
                </h5>
            </div>
          </div>

          <div className="flex  border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]"  
          >
            <div className="w-[6rem] h-[5rem] relative right-8">
              <Image src={dsa} className="w-full h-full rounded-md " alt="" />
            
            </div>
            <div className="rounded-md " >
              <h5 className=" text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                DSA 
                </h5>
            </div>
          </div>
  

        </div>
      </div>
    )
}

export default Dashboard
