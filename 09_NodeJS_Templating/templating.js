const express = require('express');
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

//placeholder data
let usernames = ['admin', 'Liam'];
let passwords = ['1234', 'pasword'];

function userExists(user){
    for (let i=0; i<usernames.length;i++)
        if(usernames[i] === user){
            return i;
        }
    return -1;
};

app.get('/', function(request, response){
    response.render("simple",{
        title: "Hello",
        message: "Welcome to our Home page"
    });
});

app.get('/listStudent', function(request, response){
    studentLists =[
        {sid:"1",firstName:"Ammar",lastName:"Hatiy"},
        {sid:"2",firstName:"Samuel",lastName:"Jones"},
    ];
    response.render("studentlist",{
        title: 'Class List',
        students: studentLists,

    });
});

app.get('/simple', function(req, res){
    res.render('simple',{
        title: "A sample for Pug",
        message: "This is a basic page",
        hiddenMessage: "This is hidden from default page"
    });
});

app.get('/login', function(req, res){
    
    res.render('login',{
        title: "Login page"
    });
});

app.post('/login', function(request, res){
    //Check the login info form database.
    console.log(request.body);
    let username = request.body.username;
    let password = request.body.password;
    passwordIndex = userExists(username);
    console.log(passwords[passwordIndex]);
    if (passwordIndex>=0 && passwords[passwordIndex]===password ){
        //Success
        res.render('loginConfirmed',{
            title: "Login successful",
            username: username
        });
    }
    else{
        res.render('login',{
            title: "Login page",
            errorMessage: "Login failed please try agian!!"
        });
    }
});

app.set('port', 5000);
app.listen(app.get('port'),function(){
    console.log(`Listening on port ${app.get('port')}`);
});