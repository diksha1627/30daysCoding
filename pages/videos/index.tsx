import React from 'react'
import board from '../../assests/board.png'
import Image from 'next/image'
import Link from 'next/link'
const index = () => {
    return (
        <div className="w-full ml-20 lg:ml-64 md:ml-64" >
            <div className="w-full grid lg:grid-cols-3  gap-y-3 sm:grid-cols-1 md:grid-cols-2  rounded-lg mt-20 pl-[4rem]"  >
                
                <div className="relative w-[20rem] h-[13rem]">
                    <a href="https://www.youtube.com/playlist?list=PLhH5oXzpy_sQWxwbcbFV0x2kBtlv_T3Ds" 
                    target="_blank" rel="noopener noreferrer" className="group ">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=6thZIGnO3uXI69j9&amp;list=PLhH5oXzpy_sQWxwbcbFV0x2kBtlv_T3Ds"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <p className="text-white text-sm border border-white py-1 px-2 rounded">Open in new tab</p>
                        </div>
                    </a>
                </div>

                <div className="relative w-[20rem] h-[13rem]">
                    <a href="https://www.youtube.com/playlist?list=PLhH5oXzpy_sQDa8zpHTKqNWTr0DKRY2c6" 
                    target="_blank" rel="noopener noreferrer" className="group ">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=lfWcYpRk_1gPT8lO&amp;list=PLhH5oXzpy_sQDa8zpHTKqNWTr0DKRY2c6"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <p className="text-white text-sm border border-white py-1 px-2 rounded">Open in new tab</p>
                        </div>
                    </a>
                </div>

                <div className="relative w-[20rem] h-[13rem]">
                    <a href="https://www.youtube.com/playlist?list=PLhH5oXzpy_sQJZblWDEKOXAz_Q2DklwNL" 
                    target="_blank" rel="noopener noreferrer" className="group ">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=8fzCPF5dbd6Du9uK&amp;list=PLhH5oXzpy_sQJZblWDEKOXAz_Q2DklwNL"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <p className="text-white text-sm border border-white py-1 px-2 rounded">Open in new tab</p>
                        </div>
                    </a>
                </div>


                <div className="relative w-[20rem] h-[13rem]">
                    <a href="https://www.youtube.com/playlist?list=PLhH5oXzpy_sRRu-QibH6QgsbiQBf4cTuG" 
                    target="_blank" rel="noopener noreferrer" className="group ">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=1nUfYEGX4E9SpOoL&amp;list=PLhH5oXzpy_sRRu-QibH6QgsbiQBf4cTuG"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <p className="text-white text-sm border border-white py-1 px-2 rounded">Open in new tab</p>
                        </div>
                    </a>
                </div>

                <div className="relative w-[20rem] h-[13rem]">
                    <a href="https://www.youtube.com/playlist?list=PLhH5oXzpy_sQyv4D-oM7fHwV1QxLdf0L-" 
                    target="_blank" rel="noopener noreferrer" className="group ">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=F4CVXYiJZH11oi75&amp;list=PLhH5oXzpy_sQyv4D-oM7fHwV1QxLdf0L-"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <p className="text-white text-sm border border-white py-1 px-2 rounded">Open in new tab</p>
                        </div>
                    </a>
                </div>


                <div className="relative w-[20rem] h-[13rem]">
                    <a href="https://www.youtube.com/playlist?list=PLhH5oXzpy_sRIw-ZYqii_hOyNJB-Wrxxj" 
                    target="_blank" rel="noopener noreferrer" className="group ">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=sarE194A-F6ir35a&amp;list=PLhH5oXzpy_sRIw-ZYqii_hOyNJB-Wrxxj"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <p className="text-white text-sm border border-white py-1 px-2 rounded">Open in new tab</p>
                        </div>
                    </a>
                </div>

                <div className="relative w-[20rem] h-[13rem]">
                    <a href="https://www.youtube.com/playlist?list=PLhH5oXzpy_sQ-l3f5dpUAkyewRVZV2mHl" 
                    target="_blank" rel="noopener noreferrer" className="group ">
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=oXlVTYph9MUsG_5v&amp;list=PLhH5oXzpy_sQ-l3f5dpUAkyewRVZV2mHl"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                            <p className="text-white text-sm border border-white py-1 px-2 rounded">Open in new tab</p>
                        </div>
                    </a>
                </div>



            </div>
        </div>
    )
}

export default index