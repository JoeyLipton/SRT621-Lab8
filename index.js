const port = 3000;
let http = require('http');
var fs = require('fs');
const url = require('url');


const routeMap = {
    "/": "views/home.html",
    "/home.html": "views/home.html",
    "/books.html": "views/books.html",
    "/book1.html": "views/book1.html",
    "/book2.html": "views/book2.html",
    "/book3.html": "views/book3.html"
};

const routeMapImg = {
    "/public/images/thecatinthehat.jpg": "public/images/thecatinthehat.jpg",
    "/public/images/dragonbook.jpg": "public/images/dragonbook.jpg",
    "/public/images/datastructuresinjava.jpg":"public/images/datastructuresinjava.jpg"
};


function onRequest(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (routeMap[req.url]) {
        fs.readFile(routeMap[req.url], (error, data) => {
            if (error) {
                console.log("ye theres an error");
                res.writeHead('200', {
                    'Content-Type': 'text/html'
                });
                res.write('<h1>File Not Found</h1>');
            } else {
                res.writeHead('200', {
                    'Content-Type': 'text/html'
                });
                res.write(data);
            }
            res.end();
        });
    }
    if (routeMapImg[req.url]) {
        fs.readFile(routeMapImg[req.url], (error, data) => {
            if(error) {
                res.writeHead('200', {
                    'Content-Type': 'text/html'
                });
            } else {
                res.writeHead('200', {
                    'Content-Type': 'image/jpeg'
                });
                res.write(data);
            }
            res.end();
        })
    }
}


http.createServer(onRequest).listen(port);