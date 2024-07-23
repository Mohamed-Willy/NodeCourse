const fs = require('fs');
const http = require('http');
const url = require('url');

const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');

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

// Read Json Data
const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  'utf-8'
);

// Convert data to string
const productData = JSON.parse(data);
// console.log(productData);

const slugs = productData.map((elm) =>
  slugify(elm.productName, { lower: true })
);
console.log(slugs);

const homeTemp = fs.readFileSync(
  `${__dirname}/starter/templates/overview.html`,
  'utf-8'
);
const cardTemp = fs.readFileSync(
  `${__dirname}/starter/templates/card.html`,
  'utf-8'
);
const productTemp = fs.readFileSync(
  `${__dirname}/starter/templates/product.html`,
  'utf-8'
);

// Creating the server
const server = http.createServer((request, response) => {
  // console.log(`Request URL: ${request.url}`)

  const { query, pathname } = url.parse(request.url, true);

  const pathName = pathname; // request.url;
  if (pathName === '/home' || pathName === '/') {
    // response.end("This is the home page");

    response.writeHead(200, { 'Content-type': 'text/html' });

    const cardHTML = productData
      .map((elm) => replaceTemplate(cardTemp, elm))
      .join('');
    console.log(cardHTML);
    const output = homeTemp.replace('{%ProductCards%}', cardHTML);

    response.end(output);
  } else if (pathName === '/product') {
    // response.end("This is the product page");
    const product = productData[query.id];
    const output = replaceTemplate(productTemp, product);
    response.end(output);
  } else if (pathName === '/api') {
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(data);
  } else {
    response.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'Willy Error Header',
    });
    response.end("<h1>Hello I'm the server you are falling back</h1>");
  }
});
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1 port 8000');
});
