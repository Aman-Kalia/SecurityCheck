const mongoose= require('mongoose');
const productSchema =new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true,
        min:10
    },
//     entryTime:{
//         type:Date,
//         required:true,
// //         default:Date.now
//     },
//     leaveTime:{
//         type:String,
//         // required:true
//     },
//     isAvailable:{
//         type:Boolean,
//     }
});

const Product=mongoose.model('Product',productSchema);
module.exports= Product;
