import * as http from 'http';
// const http = require('http')
import * as fs from 'fs';
import * as path from 'path';
const index_page = fs.readFileSync(path.join(__dirname, './index.html'));
const about_page = fs.readFileSync(path.join(__dirname, './about.html'));
const super_page = fs.readFileSync(path.join(__dirname, './super.html'));
const _404_page = fs.readFileSync(path.join(__dirname, './404.html'));
const shopping_list = fs.readFileSync(path.join(__dirname, './shopping_list.json'));



const PORT = 9100;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/about":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(about_page);
            break;

        case "/super":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(super_page);
            break;

        case "/shopping":
            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.end(shopping_list);
            break;

        case "/":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(index_page);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(_404_page);
            break;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index_page);
});

server.listen(PORT);
console.log(`server started on port ${PORT}`);