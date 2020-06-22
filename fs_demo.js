//===============FS Node Module=====================//
const fs = require('fs');

const path = require('path');

//1.Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
    if(err) throw err;
    console.log('Folder has been created...')
});

//2.Create Folder(using arrow)
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder has been created...')
});

// Create file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world, This file is created by the help of Node.js', err => {
    if(err) throw err;
    console.log('File has been created...');

    //File Append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' And I love Node.js', err => {
        if(err) throw err;
        console.log('File has been created...');
     });
    
});

//Read File
fs.readFile(path.join(__dirname, '/test','hello.txt'), 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

  //Rename file
  fs.rename(path.join(__dirname, '/test','hello.txt'), path.join(__dirname, '/test', 'Helloworld.txt'), err => {
    if(err) throw err;
     console.log('File name has been changed!');
 });
