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

const tabs = [
    {
      href: "/general",
      image: steps,
      title: "General Steps"
    },
    {
      href: "/one-on-one",
      image: aryan,
      title: "1:1 Aryan"
    },
    {
        href: "/one-on-one",
        image: deepanshu,
        title: "1:1 Deepanshu"
      },
     
      {
        href: "/live",
        image: live,
        title: "Live Classes"
      },

      {
        href: "/react",
        image: react,
        title: "Learn React"
      },

      {
        href: "/next",
        image: next,
        title: "Next js Docs"
      },
      {
        href: "/gitbub",
        image: github,
        title: "Github Repos"
      },

      {
        href: "/videos",
        image: youtube,
        title: "Youtube Videos"
      },

      {
        href: "/dsa",
        image: dsa,
        title: "DSA guide"
      },

      {
        href: "/deploy",
        image: deploy,
        title: "Deploy"
      },

      {
        href: "/pre-requisites",
        image: pre,
        title: "Pre-requisites"
      },

      {
        href: "/databse",
        image: database,
        title: "Database , GraphQL"
      },
    // Add more tab data objects here...
  ];

const Small = () => {
  return (
    <div className="grid lg:grid-cols-4 block lg:hidden gap-y-1 sm:grid-cols-1 md:grid-cols-2 sm:pl-10  rounded-lg mt-24 "  >
     {tabs.map((tab, index) => (
        <Link key={index} href={tab.href} className="flex border border-black border-2 rounded-lg hover:shadow-2xl items-center h-[7rem] w-[13rem] m-4 bg-[#FFFFCC]">
          <div className="w-[6rem] h-[5rem] relative right-8">
            <Image src={tab.image} className="w-full h-full rounded-md " alt="" />
          </div>
          <div className="rounded-md " >
            <h5 className=" text-[21px] font-bold tracking-tight text-gray-900 dark:text-white">
              {tab.title}
            </h5>
          </div>
        </Link>
      ))}
   
  

   


  </div>
  )
}

export default Small