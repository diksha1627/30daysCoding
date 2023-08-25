import React from 'react';
import Link from 'next/link';
import steps from '../assests/general.png'
import Image from 'next/image'
import aryan from '../assests/coaching.png';
import deepanshu from '../assests/teaching.png';
import live from '../assests/live-streaming.png';
import github from '../assests/github.png';
import react from '../assests/react.png';
import next from '../assests/next.png';
import pre from '../assests/pre.png';
import database from '../assests/database.png';
import auth from '../assests/authenticity.png';
import deploy from '../assests/deploy.png';
import dsa from '../assests/dsa.png';
import youtube from '../assests/youtube.jpg'
const Tree = () => {
    return (
        <div className="tree hidden lg:block">
            <ul className="relative">
                <li className="">
                    <Link href="/general" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                        h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                      >
                        <div className="w-[50%] h-[95%] relative right-8">
                            <Image src={steps} className="w-full h-full rounded-md " alt="" />

                        </div>
                        <div className="rounded-md relative bottom-8 left-6 " >
                            <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                General Steps
                            </h5>
                        </div>
                    </Link>
                    <ul className="relative text-center pl-8 mt-2">
                        <li className="relative">
                            <Link href="/one-on-one" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
      h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                            >
                                <div className="w-[50%] h-[95%] relative right-8">
                                    <Image src={aryan} className="w-full h-full rounded-md " alt="" />

                                </div>
                                <div className="rounded-md relative bottom-8 left-6 " >
                                    <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                        1:1 Aryan
                                    </h5>
                                </div>
                            </Link>
                            <ul className="relative text-center pl-8 mt-2">
                                <li className="relative">
                                    <Link href="/github" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
      h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                    >
                                        <div className="w-[50%] h-[95%] relative right-8">
                                            <Image src={github} className="w-full h-full rounded-md " alt="" />

                                        </div>
                                        <div className="rounded-md relative bottom-8 left-6 " >
                                            <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                                Github Repos
                                            </h5>
                                        </div>
                                    </Link>
                                    <ul className="relative text-center pl-8 mt-2">
                                        <li className="relative">
                                            <Link href="/videos" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
      h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                            >
                                                <div className="w-[50%] h-[95%] relative right-8">
                                                    <Image src={youtube} className="w-full h-full rounded-md " alt="" />

                                                </div>
                                                <div className="rounded-md relative bottom-8 left-6 " >
                                                    <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Youtube
                                                    </h5>
                                                </div>
                                            </Link>
                                        </li>


                                    </ul>
                                </li>

                                <li className="relative">
                                    <Link href="/live" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                                         h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                    >
                                        <div className="w-[50%] h-[95%] relative right-8">
                                            <Image src={live} className="w-full h-full rounded-md " alt="" />

                                        </div>
                                        <div className="rounded-md relative bottom-8 left-6 " >
                                            <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                                Live Classes
                                            </h5>
                                        </div>
                                    </Link>
                                    <ul className="relative text-center pl-8 mt-2">
                                        <li className="relative">
                                            <Link href="/next" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                                                      h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                            >
                                                <div className="w-[50%] h-[95%] relative right-8">
                                                    <Image src={react} className="w-full h-full rounded-md " alt="" />

                                                </div>
                                                <div className="rounded-md relative bottom-8 left-6 " >
                                                    <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                                        REACT
                                                    </h5>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="relative">
                                            <Link href="/next" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                                          h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                            >
                                                <div className="w-[50%] h-[95%] relative right-8">
                                                    <Image src={next} className="w-full h-full rounded-md " alt="" />

                                                </div>
                                                <div className="rounded-md relative bottom-8 left-6 " >
                                                    <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Next JS DOCS
                                                    </h5>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="relative">
                            <Link href="/one-on-one" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                                   h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                            >
                                <div className="w-[50%] h-[95%] relative right-8">
                                    <Image src={deepanshu} className="w-full h-full rounded-md " alt="" />

                                </div>
                                <div className="rounded-md relative bottom-8 left-6 " >
                                    <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                        1:1 Deepanshu
                                    </h5>
                                </div>
                            </Link>
                            <ul className="relative text-center pl-8 mt-2">
                                <li className="relative">
                                    <Link href="/database" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
      h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                    >
                                        <div className="w-[50%] h-[95%] relative right-8">
                                            <Image src={database} className="w-full h-full rounded-md " alt="" />

                                        </div>
                                        <div className="rounded-md relative bottom-10 left-6 " >
                                            <h5 className=" text-[15px]  font-bold tracking-tight text-gray-900 dark:text-white">
                                                Database , <br />GraphQL
                                            </h5>
                                        </div>
                                    </Link>
                                    <ul className="relative text-center pl-8 mt-2">
                                        <li className="relative">
                                            <Link href="/auth" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                                       h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                            >
                                                <div className="w-[50%] h-[95%] relative right-8">
                                                    <Image src={auth} className="w-full h-full rounded-md " alt="" />

                                                </div>
                                                <div className="rounded-md relative bottom-8 left-6 " >
                                                    <h5 className=" text-[15px]  font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Auth
                                                    </h5>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="relative">
                                    <Link href="/deploy" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
      h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                    >
                                        <div className="w-[50%] h-[95%] relative right-8">
                                            <Image src={deploy} className="w-full h-full rounded-md " alt="" />

                                        </div>
                                        <div className="rounded-md relative bottom-8 left-6 " >
                                            <h5 className=" text-[15px]  font-bold tracking-tight text-gray-900 dark:text-white">
                                                Deploy
                                            </h5>
                                        </div>
                                    </Link>
                                    <ul className="relative text-center pl-8 mt-2">
                                        <li className="relative">
                                            <Link href="/pre-requisites" className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                                           h-[4rem] w-[10rem] m-4 bg-[#FFFFCC]"
                                            >
                                                <div className="w-[50%] h-[95%] relative right-8">
                                                    <Image src={pre} className="w-full h-full rounded-md " alt="" />

                                                </div>
                                                <div className="rounded-md relative bottom-8 left-6 " >
                                                    <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                                        Pre-requisites
                                                    </h5>
                                                </div>
                                            </Link>
                                        </li>


                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Tree