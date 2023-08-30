import {connect} from "../../dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "../../models/userModel";

connect()

export default async function POST(req,res){
    try {


        //take email fromm user
        let email = req.body.email;

         let user = await User.findOne({email:email})

         if(user == null){
            console.log("null null")
             return res.status(200).json({status:false,msg:"email id not found"})
         }
        
         
        var today = new Date();

        console.log(user?.next_payment_date_in_datetime)
        // Calculate the time difference in milliseconds
        var timeDifference =  user.next_payment_date_in_datetime - today;
 
        // Calculate the difference in days
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 

        let response = {status:true,daysLeft:daysDifference,next_payment_date_in_datetime:user.next_payment_date_in_datetime}
         

 
        console.log(response)


         return  res.status(200).json(response)


    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,error: error.message})
    }
}