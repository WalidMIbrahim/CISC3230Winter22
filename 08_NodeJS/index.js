let express = require('express');

let app =express();

app.get("/",function(request, response){
    response.send("<html> <title> Welcome</title> <body>Welcome to our page! </body></html>");
});

app.set('port',process.env.PORT ||4500);
app.listen(app.get('port'),function(){
    console.log(`Nodejs Server is up and listing to port ${app.get('port')}`);
});