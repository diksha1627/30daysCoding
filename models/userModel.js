import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    credits: {
        type: Number
    },
    days_credited: {
        type: Number
    },
    next_payment_date : String,
    next_payment_date_in_datetime:Date,
    status:String,
    signup_date_in_datetime:Date,
    signup_date:String,
    buyer_name : String,
    buyer_phone: String,
    most_recent_payment_amount:Number,
    most_recent_payment_date: String,
    most_recent_payment_date_in_datetime: [Date],
    deactivated_date : String,

    deactivated_date_in_datetime : Date,

})


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;