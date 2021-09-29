const express= require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const detailsRoutes=require('./routes/detailsRoutes');
const seedDB = require('./seed');
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));


mongoose.connect('mongodb://localhost:27017/entancedetails')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err);
});
seedDB();
// app.get('/',(req,res)=>{
//     res.send("Home Page");
// })
app.use(detailsRoutes);

app.listen(3000,(req,res)=>{
    console.log("server running at port 2323");
});