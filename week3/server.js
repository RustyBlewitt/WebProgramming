const express = require('express');  // Used for routing
const app = express(); // This app object denotes the Express application, it's creted by calling the top-level express() function
                        // exported by the Express module

var bodyParser = require('body-parser'); // Need to access the form elements 

app.use(bodyParser.json()); // Mounts the specified middleware function at the specified path: the middleware function is
                            // executed when the base of the requested path matches the path. In this case we are using
                            // middleware to parse JSON data

app.use(express.static(__dirname + '/www')); // Serve static content for the app from the "www" directory in the app directory
app.use('/public', express.static(__dirname + '/public')); // Serve static content for the app from the public directory

app.listen(3000, '127.0.0.1', function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('Server had been started at: ' + n + ':' + m);
})

// Route for default page for root of site
app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/form.html');
});

// Route for user page
app.get('/www/loggedin', function(req, res){
    res.sendFile(__dirname + '/www/loggedin.html');
});

// Route for credential comparison
app.post('/api/login', function(req, res){

    const users = [
        {'email': 'test@email.com', 'upwd': 'password', 'img': 'user1.jpeg'},
        {'email': 'user@email.com', 'upwd': '123', 'img': 'user2.jpeg'},
        {'email': 'valid@email.com', 'upwd': 'abc123', 'img': 'user3.jpeg'},
    ]

    if (!req.body) {
        return res.sendStatus(400)
    }

    var loginAttempt = {};
    loginAttempt.email = req.body.email; // Add in the value of the typed email
    loginAttempt.upwd = req.body.upwd;   // Add in the value of the typed password. This is bad practice
    loginAttempt.valid = false; // Default to false

    for (i in users){
        if (req.body.email == users[i].email && req.body.upwd == users[i].upwd){
            loginAttempt.valid = true;
            loginAttempt.img = users[i].img
            break
        }
    }

    if(loginAttempt.valid) {
        var user = users.filter(u => {
            return u.email === loginAttempt.email
        })
        res.send(user[0])
    }else{
        // On failure, send email as empty string
        res.send({'email':''});
    }


});
