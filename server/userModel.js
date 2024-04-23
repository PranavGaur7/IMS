const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_LINK)
.then(function(db) {
    console.log("user db connected");
})
.catch(function(err) {
    console.log(err);
})

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('userModel',userSchema);