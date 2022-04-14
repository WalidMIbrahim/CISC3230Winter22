const { response } = require('express');
const express = require('express');
const app = express();

const chirpsModel = require('./model/chirps_model.js');


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))// to access data sent by post
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');


app.get('/chirps', (req, res) =>{
    let tableHeader = "A list of chirp";
    let info ="";
    if (req.query.info){
        info = req.query.info
    }
    chirpsModel.getAllChirps((chirps) => {
        res.render('view_chrips',{
            title: 'View chirp',
            tableHeader:  tableHeader,
            info:info,
            chirps: chirps
        });
    });
});

app.post('/deleteChirp',(req, res) =>{
    chirpsModel.deleteChirp(req.body.chirpId, () =>{
        
        res.redirect(`/chirps?info=row+deleted+${req.body.chirpId}`);
    });
});

app.post('/addChirp',(req, res) =>{
    chirpsModel.addChirp(req.body.senderId, req.body.message, () =>{
        
        res.redirect(`/chirps?info=row+inserted`);
    });
});

app.set('port', 2000);

app.listen(app.get('port'), function(){
    console.log(`Nodejs Server is listening to port ${app.get('port')}`);
});