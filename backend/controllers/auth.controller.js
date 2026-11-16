import user from "../models/user.model.js"
import bcrypt from "bcryptjs"
import getToken from "../utils/token.js"
import { sendOtp } from "../utils/mail.js"


 export const signUp = async (req, res) => {
    try {
        const { fullName, email, password, mobileNumber, role } = req.body

        const existingUsers = await user.findOne({ email })

        if (existingUsers) {
            return res.status(400).json({ message: "User is already exist " })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "password should be at least 6 chracter " })
        }
         if (!mobileNumber) {
            return res.status(400).json({ message: "mobile number is required " })
        }
        if (mobileNumber.length < 10) {
            return res.status(400).json({ message: "mobile number should be at least 10 chracter " })
        }
       
        const hashePasswrod = await bcrypt.hash(password,10)

         const newUsers = await user.create({
            fullName,
            email,
            password: hashePasswrod,
            mobileNumber,
            role
        })
        const token  =await getToken(newUsers._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000 
        })
        return res.status(201).json({ message: "User created successfully", newUsers })
    }
    catch (error) {
        return res.status(500).json({ message: "something wrong from the signUp side " })
    }
}




// from here it is the login seciton of this porject 

export const login = async (req, res) => {

    try {
        const {  email, password} = req.body

        const Users = await user.findOne({ email })

        if (!Users) {
            return res.status(400).json({ message: "User does not exist " })
        }

        if (!password) {
            return res.status(400).json({ message: "password is required " })
        }
        const isMatch = await bcrypt.compare(password, Users.password)
        if (!isMatch) {
            return  res.status(400).json({ message: "Password is Incorrect" })
        }
        const token  =await getToken(Users._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json({ message: "User Login successfully", Users })
    }
    catch (error) {
        return res.status(500).json({ message: "something wrong from the Login side " })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "User logged out successfully" })
    }
    catch (error) {
        return res.status(500).json({ message: "something wrong from the Logout side " })
    }
}


// from here sending otp wala bakchodi

export const sentOtp = async (req,res)=>
{
    try {
        
        const {email}=req.body
        const checkMail = await user.findOne({email})
        if(!checkMail)
        {
            return res.status(400).json({message:"brother you dont have the account with this email "})
        }
        const otp = Math.floor(1000+Math.random()*9000).toString()
        user.restOtp= otp
        user.otpExpires= Date.now()+5*60*1000
        user.isOtpVerified=false

        await user.Save()
        await sendOtp(email,otp)
        return res.status(200).json({message:"Otp send successfully"})
    } 
    catch (error) {
        return res.status(500).json({message:"something is wrong from the sending email section ",error:error.message})
    }
}

const verifyOtp =async (req,res)=>
{
    try {
        const {email}=req.body
        const checkingOtp = user.findOne({email})

        if(!checkingOtp || user.restOtp!=otp || user.otpExpires<Date.now())
        {
            return res.status(400).json({message:"Invalid / Expire Otp ", error:error.message})
        }
        user.isOtpVerified= true
        user.restOtp= undefined
        user.otpExpires= undefined
await user.save()
        return res.status(200).json({message:"Otp verified successfully"})
    } catch (error) {
        return res.status(500).json({message:"There is a problem from verifyOtp section ", error :error.message})
    }
}