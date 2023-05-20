const express = require('express');
const Router= express.Router();
const homeSchema = require('../models/homeSchema')

Router.get('/',(err,res)=>{
    res.render('register',{title : 'Fill Form',password:'',email:''})
})

Router.post('/register',async(req,res)=>{
    try{
         const {
             name,
            number,
            email,
            password,
            cpassword
         } = req.body;
         //console.log(name)

         if(password === cpassword){
           const userData = new homeSchema({
                 name,
                 number,
                  email,
                 password
           })
           userData.save(err =>{
            if(err){
                console.log('Error')
            }else{
                res.render('register',{title : 'Done',password:'',email:''})
            }
           })

         }else{
            res.render('register',{title : '',password:'Password not matching',email:''})

         }
    }catch(errror){
        res.render('register',{title : 'Error in code',password:'',email:''})
    }
})
module.exports = Router;