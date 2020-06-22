//____________________creating a server___________________//

 const http = require('http');
 
 const path = require('path');
 
 const fs = require('fs');
const { extname } = require('path');

 const server = http.createServer((req, res) => {

    //================creating static server with only html files=====================//
    
    //to get which url is called out 
    console.log(req.url);

    if(req.url === '/') {
        //Using fs module for calling the index.html file
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
            //throwing garbage in console
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'}); //updating the content type
            res.end(content); // Any change will be dectated by the nodemon that we have installed locally and updated our script.

        })
        

    }
    
    //To get About page
     if(req.url === '/about'){
        
        //Using fs module for calling the index.html file
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
        (err, content) => {
            //throwing garbage in console
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'}); //updating the content type
            res.end(content); // Any change will be dectated by the nodemon that we have installed locally and updated our script.

        })
    } 

    //To get the JSON DATA
    if(req.url === '/api/users'){
        
        //Creating JSON DATABASE
        const users = [
            { name: 'Shivanshu', age:21},
            { name: 'Kashyap', age:21},

        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users))
    }
     //================================= creating Dynamic Server with other html and css filess=====================//
    //Build file Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    /* console.log(filePath);
    res.end(); */ // taking the filepat in console

    //Variable for extention of a file
    let extname = path.extname(filePath);

    //Intial content file wit html as var
    let contentType = 'text/html';

    //Checking the extention of file and set the content type using switch
    switch(extname){
        
        case '.js':
            contentType ='text/javascript';
            break;
        
        case '.css':
            contentType ='text/css';
            break;

        case '.json':
            contentType ='application/json';
            break;
        
        case '.png':
            contentType ='image/png';
            break;

    }

    //Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){

                //Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => 
                {
                    res.writeHead(200, { 'Content-Type': 'text\html'});
                    res.end(content, 'utf-8');
                })
            }
            else {

                //Some Server Error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else {
            
            //Succes
            res.writeHead(200, { 'Content-Type': contentType}); 
            res.end(content, 'utf-8');
        }
    })
}); 

//Giving choice to server to choose from 
const PORT = process.env.PORT || 5000;
//server listening to suitable port and giving port number
 server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

