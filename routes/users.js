var express = require('express');
var router = express.Router();
const testimonialModel=require("../models/testiModel")
const projectModel=require("../models/projectModel");




router.get("/get/testimonies" , async function(req, res, next) {

const allTestimonies=await testimonialModel.find();


 res.json(allTestimonies)

});



router.post("/upload/testimonies",async function(req,res){

   const {email,username, testimonialText}=req.body;
    console.log(email,username, testimonialText);
      const testimony= await testimonialModel.create({

        testimonyMessage:testimonialText,
           clientEmail:email,
           clientName:username });
    res.json({save:"successful"})
})



router.post("/upload/project",async function (req,res){
const {imageUrl,title,gitDeomoUrl,demoUrl}=req.body
const project=await projectModel.create({

  imageUrl:imageUrl,
  title: title,
  gitDemoUrl:gitDeomoUrl,
  demoUrl:demoUrl,

});
res.json({data:"seccesfully save"});
})



router.get("/get/all/project", async function(req,res){
  try{
const allProject=await  projectModel.find();
  res.json(allProject);
  }
  catch(err){
  res.json({error:err.message})
  }


})


router.get('/upload',async function(req,res){


  const users=await projectModel.create({
    imageUrl: 'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
    title: 'Recipe app',
    gitDemoUrl: 'https://github.com',
    demoUrl: 'https://dribbble.com/shots/21636337-Recipe-app',

  });
   
res.json(users);
console.log(users);

})

module.exports = router;
