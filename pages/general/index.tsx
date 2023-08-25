import React from 'react'
import board from '../../assests/board.png'
import Image from 'next/image'
import Link from 'next/link'
const index = () => {
    return (
        <div className="w-full ml-20 lg:ml-64 md:ml-64" >
            <div className="w-full grid lg:grid-cols-4  gap-y-1 sm:grid-cols-1 md:grid-cols-2  rounded-lg mt-24 pl-[4rem]"  >

                <Link target="_blank" 
                href="https://docs.google.com/presentation/d/1PqV8-Oxe7JcWcwTqsVbimQjy41nwqILrGOqxgShEzlI/edit#slide=id.p" 
                className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]   font-bold text-center">Send Your Resume
                        For Review</p>
                    </div>
                  
                </Link> 

                <Link target="_blank" href="https://nas.io/30dayscoding/community-hackathon" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <p className="text-black text-[21px]   font-bold text-center">Attend MasterClass <br/> and   Hackathons</p>
                    </div>
                </Link>

                <Link target="_blank" href="https://github.com/sibi-sharanyan" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">Work on  <br/>  github profile</p>
                    </div>
                </Link>

                <Link target="_blank" href="https://docs.google.com/presentation/d/1q2FTnJA9XX0jf5OlYHe-Z7ZnfNFTeOKmaJM2-Vi9cSo/edit#slide=id.p" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px] font-bold text-center">Project  <br/> Guide</p>
                    </div>
                </Link>

                <Link target="_blank" href="https://docs.google.com/presentation/d/1LYuplnZQlJB2IPIDpErLOOtALPf8FGhNaiQFsJuC8as/edit#slide=id.p" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">DSA   <br/> Revision   <br/>Guide</p>
                    </div>
                </Link>

                <Link target="_blank" href="https://nightlightprojects.myinstamojo.com/" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">Coding Courses and Guides</p>
                    </div>
                </Link>

                <Link target="_blank" href="https://docs.google.com/presentation/d/1GAoCYaBxP3NBYmoYcBIgcC3qNMZZ-xQlmhAaVAHfVag/edit#slide=id.p" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">Tech Jobs Road-Maps</p>
                    </div>
                </Link>




                <Link target="_blank" href="https://docs.google.com/presentation/d/1b_I6GshgTbhIAX4wBYmEjGEP56Dy4MN4BSWhUPmF9T0/edit#slide=id.g25818de803c_0_36" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">AI Apps <br/> Guide</p>
                    </div>
                </Link>


                <Link target="_blank" href="https://docs.google.com/presentation/d/1uUn8WOFOdgBfnXFgoYeQBr7ONb4PUZ4I0Ile_jhWr_A/edit#slide=id.p" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">Blockchain Guide</p>
                    </div>
                </Link>


                <Link target="_blank" href="https://docs.google.com/presentation/d/1V0KJiflH7-z37NXf6_6XkwC6fubzGuVds5fFmesn_ow/edit" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">Firebase <br/> Guide</p>
                    </div>
                </Link>

                <Link target="_blank" href="https://docs.google.com/presentation/d/1zpHYriSz-bBYZ-5alwm_dlHD3mMqwCe4oQg2MtM3OL8/edit" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">MERN  <br/> Guide</p>
                    </div>
                </Link>

                <Link target="_blank" href="https://docs.google.com/presentation/d/14Ou3hOTPcO-1IeXTaeYdtLV5VEhG4DyBJm6Hm33Jhxs/edit#slide=id.p" className={`w-[12rem] h-[12rem] relative rounded-2xl hover:shadow-xl`}>
                    <Image src={board} alt="Board Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-black text-[25px]  font-bold text-center">Notion  <br/> Guide</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default index