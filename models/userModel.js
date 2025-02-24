const { default: mongoose, Schema } = require("mongoose");

const userSchma = new Schema ({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:[ true ,"email obossoi unike hote hobe"]
    },
    password:{
        type:String,
        require:true

    },
    phone:{
         type:String,
         require:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    otp:{
        type:String,
    }

})
module.exports =mongoose.model("user",userSchma)