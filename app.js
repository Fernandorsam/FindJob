const express    =  require('express');
const { engine}     =  require('express-handlebars');
const app        =  express();
const path       =  require('path');
const db         =  require('./db/connection');
const bodyParser = require('body-parser');
const PORT  = 3000;


app.listen(PORT,function(){
console.log(`Express rodando na porta ${PORT}`);
});

//body-parser
app.use(bodyParser.urlencoded({extended:false}));

//handlebars
app.set('views', path.join(__dirname,'views'));
app.set('view engine','handlebars');
app.engine('.handlebars', engine({defaultLayout : '../layout/main'}));


// static folder
app.use(express.static(path.join(__dirname + '/public')));


// db connection
db
.authenticate()
.then(()=>{
  console.log('conectou com sucesso');
})
.catch(err => {
  console.log('ocorreu um erro ao conectar ', err);
});

// routes

app.get('/' , (req,res) => {
   res.render('index');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));
