const fs = require('fs');
const http = require('http');
const url = require('url');

// Blocking, Synchronous Way
/*
    // Read From File
    const inputText = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
    console.log(inputText);
    // Write Into File
    const outputText = `I am an amazing programmer \n\n\n ${inputText}`
    fs.writeFileSync('./starter/txt/output.txt', outputText);
*/
// Non-blocking, Asynchronous Way
/*
    //Read From File
    fs.readFile('./starter/txt/input.txt', 'utf-8', (err, data) => {
        console.log(data);
        //Read From File
        fs.writeFile('./starter/txt/AsyncOutput', `Willyyyyyyyy \n\n\n ${data} \n Got Data`,(err) => {
            console.log("Finished Writing");
        });
        console.log("Writing Data");
    })
    console.log("Reading Data");
*/

// Creating the server
const server = http.createServer((request, response) =>{
    // console.log(`Request URL: ${request.url}`)
    const pathName = request.url;
    if(pathName === '/home' || pathName === '/'){
        response.end("This is the home page");
    }
    else if(pathName === '/product'){
        response.end("This is the product page");
    }
    else {
        response.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Willy Error Header'
        });
        response.end('<h1>Hello I\'m the server you are falling back</h1>');
    }
});
server.listen(8000, '127.0.0.1', () =>{
    console.log('Listening on 127.0.0.1 port 8000');
});
