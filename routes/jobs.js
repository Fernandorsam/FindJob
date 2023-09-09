const express    = require('express');
const router     = express.Router('Router');
const Job        = require('../models/Job');
const bodyParser = require('body-parser');




//rota de teste usando postman
// router.get('/test', (req,res) =>{
//   res.send('funcionando perfeitamente')
// });

router.get('/add' , (req,res)=>{
  res.send('add');
 
});

//add job via post  

router.post('/add',(req,res) =>{
 let { title,salary, company,description, email, newJob} = req.body;

 //insert
 Job.create({
  title,
  salary,
  company,
  description,
  email,
  newJob

 })
 .then(() => res.redirect('/'))
 .catch((err) => console.log(err));

});

module.exports = router;

