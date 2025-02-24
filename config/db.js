const { default: mongoose } = require("mongoose");

function dbconnect(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("database is connected")
    }).catch((error)=>{
            console.log(error)
    })
}
module.exports = dbconnect