const express = require('express');
const mysql = require('mysql')
  
const db = mysql.createConnection({
    host:'remotemysql.com',
    user:'hhStR1sULH',
    password:'YAmflBFsks',
    database:'hhStR1sULH'
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql connected...');
});

const app = express();
const PORT=process.env.PORT ||3000;
app.listen(PORT,()=>{
    console.log('Server started on port',PORT)
});
