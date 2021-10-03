const Detail= require('./models/detail');


const details=[
    {
        name:'Aman Kalia',
        email:'amankalia4074.ak@gmail.com',
        phoneNo:'8427480655',
        // entryTime:Date.now,
        // leaveTime:Date.now,
        // isAvailable:true
    },
    {
        name:'Karan',
        email:'karan412.ak@gmail.com',
        phoneNo:'9427480648',
        // entryTime:Date.now,
        // leaveTime:Date.now,
        // isAvailable:true
    },
    {
        name:'Utsav',
        email:'ustav4.ak@gmail.com',
        phoneNo:'9445480655',
        // entryTime:Date.now,
        // leaveTime:Date.now,
        // isAvailable:true
    }
];
const seedDB= async()=>{
    await Detail.deleteMany({});
    await Detail.insertMany({details});
    console.log('DB Seeded');
}
module.exports=seedDB;
