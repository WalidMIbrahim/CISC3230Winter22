let express = require('express');
let session = require('express-session');
const { get } = require('express/lib/response');
let app =express();

app.use(express.static('public'));
app.use(session({
    //genid: "111",
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true }
}));
app.use(express.urlencoded({extended: false}));
app.get("/",function(request, response){
    response.send("<html> <title> Welcome</title> <body>Welcome to our page! </body></html>");
});
app.get('/users', function(request,response){
    let name = request.query.name;
    let age = request.query.age;

    response.send(`Hello, ${name} you are ${age}`);
});

app.get("/secret", function(request,response){
    if(request.session.username){
        response.send("Secret Message !!!");
    }else{
        response.send("unquthorized access!!");
    }
});

app.get('/users/:id/:name', function(request,response){
    let id = request.params.id;
    let name = request.params.name;
    

    response.send(`Hello, ${name} your id is ${id}`);
});

app.get('/cats', function(request,response){
    //served statically. Not recommend
    response.sendFile( __dirname +'/cats.html');
});

app.use('/login',function(request,response,next){
    console.log("Retrive data from database");
    next();
});


app.get('/login',function(request,response){
    //served statically. Not recommend
    console.log(request.query);
    if (request.query.name === 'Bret' &&
        request.query.password1 === 'hildegard.org' ){
        response.send( 'login successful');
    }
    else {
        response.send( 'Login is incorrect');
    }
    
});

app.get('/logout',function(request,response){
    request.session.username="";
    response.send("You are logged out")
    console.log("logout");
})

app.post('/login',function(request,response){
    
    console.log(request.query);
    console.log(request.body);
    if (request.body.name === 'Bret' &&
        request.body.password1 === 'hildegard.org' ){
        request.session.username = request.body.name;
        response.send( 'login successful');
        
    }
    else {
        response.send( 'Login is incorrect');
    }
    
});

app.set('port',process.env.PORT ||4500);
app.listen(app.get('port'),function(){
    console.log(`Nodejs Server is up and listing to port ${app.get('port')}`);
});