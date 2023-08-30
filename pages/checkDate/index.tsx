import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

// Define an interface for the expected data structure
interface ApiResponse {
    msg: string;
    daysLeft: number;
    next_payment_date_in_datetime: string; // Update this with the correct type
    // ... Other properties you expect in the API response
}

const Index = () => {
    const [email, setEmail] = useState('');
    const [data, setData] = useState<ApiResponse | null>(null); // Use the ApiResponse interface

    const [isLoading, setIsLoading] = useState(false); // New state for the loader

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setIsLoading(true); // Show loader while fetching data
            const response = await axios.post("/api/data", { email: email });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false); // Hide loader after fetching
        }
    }

    // Make sure to handle cases where data is null or undefined
    const nextPaymentDate = data ? new Date(data.next_payment_date_in_datetime) : new Date();

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    };
    const formattedDate = nextPaymentDate.toLocaleDateString('en-US', options);

    return (
        <div className="w-full ml-8 lg:ml-64 md:ml-64 mt-20 lg:p-10">

            <div className="">

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" value={email} name="email" onChange={(e) => { setEmail(e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter Your Email"
                            required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 
                                                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                                                 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
                                                 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>

                <div className="mt-4 flex-col p-2 justify-center items-center border-2">
                    {isLoading ? ( // Show loader when fetching data
                        <p>Loading...</p>
                    ) : (
                        <>
                            <p className='text-[20px]'>
                                <span className='font-bold text-[22px] font-times'> Days Left : </span>
                                {data?.msg === "email id not found" ? "Invalid Email" : data?.daysLeft }
                            </p>
                            <p className='text-[20px]'>
                                <span className='font-bold text-[22px] font-times'>Next Payment Date : </span>
                                {data && formattedDate}
                            </p>
                            {data && data?.daysLeft <=5 ? (
                            <p className='text-[20px]'>
                                <span className='font-bold text-[22px] font-times'>Extend Subscription : </span>
                               <Link target="_blank" className='border-b-2 border-black' href="https://nightlightprojects.mojo.page/30-days-coding-existing-user">Payment Link</Link>
                            </p>
                             ) : '' }
                        </>
                    )}
                </div>
               
            </div>
        </div>
    )
}

export default Index