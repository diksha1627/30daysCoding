import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Index = () => {

    const [email, setEmail] = useState('');
    const [data, setData] = useState('');


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await axios.post("/api/data", { email: email })
            .then(response => {
                setData(response.data); // Assuming your response has a data property
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    const nextPaymentDate = new Date(data.next_payment_date_in_datetime);

    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const formattedDate = nextPaymentDate.toLocaleDateString('en-US', options);
    return (
        <div className="w-full ml-12 lg:ml-64 md:ml-64 mt-20 lg:p-10">

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

                <div className="mt-4 flex-col p-2  justify-center items-center border-2">
                <p className='text-[20px]'><span className='font-bold text-[22px] font-times'> Days Left : </span>{data.msg=="email id not found" ? "Invalid Email" : data.daysLeft} </p>
                <p className='text-[20px]'><span className='font-bold text-[22px] font-times'>Next Payment Date : </span> {data && formattedDate}</p>
                    
                    </div>  
               
            </div>
        </div>
    )
}

export default Index