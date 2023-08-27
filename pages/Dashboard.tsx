import React, { useState, useEffect } from 'react';
import Small from '@/components/Small';
import Tree from '@/components/Tree';
import Link from 'next/link';

const Dashboard = () => {

return (
  <div className="w-full ml-20 lg:ml-48 md:ml-64 mt-16">
     <Link href="/checkDate" className="mb-[-2rem] ml-24 flex border border-black border-2 rounded-lg hover:shadow-2xl items-center 
                        h-[4rem] w-[10rem] m-4  bg-[#ADD8E6]"
                      >
                        <div className="rounded-md relative left-6 " >
                            <h5 className=" text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">
                                Due Date check
                            </h5>
                        </div>
                    </Link>
    <Tree />
    <Small />
  </div>
);
};

export default Dashboard;