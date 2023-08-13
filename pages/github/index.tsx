import React from 'react'
import Image from 'next/image'
import github from '../../assests/github.png';

const index = () => {
    return (
        <div className='sm:ml-64 w-[82vw] mt-[-1rem]  lg:h-[80vh] h-screen'>
            <div className=" w-full h-full  flex flex-col items-center  rounded-lg mt-24 pl-[5rem] " >
                <div className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center sm:w-[25rem] h-[7rem] lg:w-[40rem] m-4 bg-[#FFFFCC]"
                >
                    <div className="w-[6rem] h-[5.3rem] relative right-8">
                        <Image src={github} className="w-full h-full rounded-md " alt="" />

                    </div>
                    <div className="rounded-sm " >
                        <h5 className=" lg:text-[50px] sm:text-[25px] font-bold tracking-tight text-gray-900 dark:text-white">
                            GITHUB REPOSITORIES
                        </h5>
                    </div>
                </div>



                <div className="rounded-md  w-auto  h-auto  bg-[#87CEEB] border-2 border-black  " >

                    <div className="rounded-sm text-[20px] grid lg:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center mt-10 " >
                        <a href="/" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[21rem] m-3 bg-[#FFFFCC]  border-b-2  border-black" >

                            firebase-everything
                        </a>

                        <a href="/" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[21rem] m-3 bg-[#FFFFCC]  border-b-2  border-black" >

                            nextjs-prisma-sql
                        </a>


                        <a href="/" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[21rem] m-3 bg-[#FFFFCC]  border-b-2  border-black" >

                            api-saas-project
                        </a>

                        <a href="/" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[21rem] m-3 bg-[#FFFFCC]  border-b-2  border-black" >

                            subscription-starter
                        </a>


                        <a href="/" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[21rem] m-3 bg-[#FFFFCC]  border-b-2  border-black" >

                            taxonomy
                        </a>

                        <a href="/" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[21rem] m-3 bg-[#FFFFCC]  border-b-2  border-black" >

                            pinecne-vercel-ai
                        </a>

                        <a href="/" className=" text-[19px] rounded-2xl font-bold tracking-tight flex justify-center border border-2 border-black p-1 w-[21rem] m-3 bg-[#FFFFCC]  border-b-2  border-black" >
                        NextJS-NestJS-GraphQL
                        </a>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default index
