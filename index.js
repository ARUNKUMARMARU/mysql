const app = require('./app');
const config = require('./config');
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Aa@9791505611',
    database : 'login'
})


app.listen(config.PORT, ()=>{
   try{
    console.log(`Server connected port on ${config.PORT}`);
    db.connect(error =>{
        if(error){
            console.log (error);
        }else{
            console.log('Server Connected MySQL database')
        }
    })
   }catch(error){
    console.log('Error :', error.message)
   }
});
app.set('db', db);