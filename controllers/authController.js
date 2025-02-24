const { sendEmail } = require("../helpers/sendEmail");
const userModel = require("../models/userModel");
const otpGenerator = require('otp-generator')

async   function SignupController(req, res){
    const{name, email, password, phone,role } = req.body;
const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    try {
        const olduseremail =  await userModel.findOne({email});
        if(!olduseremail){
                
      const user = new userModel({
        name,
        email, 
        password,
        phone,
        role,
    
      });
    await user.save();
    sendEmail(email,otp);
    user.otp = otp;
    await user.save();
    setTimeout(async() => {
       user.otp=null;
       await user.save()
    },10000);

    res
    .status(201)
    .json({ msg:"signup successfull",success:true, data:user});

        }else{
            res
            .status(500)
            .send({success:false, msg:"already have an a account"})
        }
    } catch (error){
        res.status(500).json({error:error.message ? error.message:error,success:false});
    }
}




function LoginController(req,res){
   
    res.send("login")
}
module.exports = {SignupController,LoginController}