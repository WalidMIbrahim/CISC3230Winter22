const express = require('express');
const app = express();

const chirpsModel = require('./model/chirps_model.js');


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))// to access data sent by post
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

app.set('port', 2000);

app.listen(app.get('port'), function(){
    console.log(`Nodejs Server is listening to port ${app.get('port')}`);
});