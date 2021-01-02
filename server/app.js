/**
 * @author drxiao<13120630809@163.com>
 */
const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const port = '5001';

// express app
const app = express();

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cookieParser());

app.use(
  session({
    secret: 'zvvn mod',
    resave: false,
    saveUninitialized: true,
  }),
);

app.get('/', (req, res) => {
  const data = fs.readFileSync(`${__dirname}/../docs-dist/index.html`, 'utf8');
  res.send(data);
});

// static file serve
app.use(express.static(path.join(__dirname, '../docs-dist')));

// start up
app.listen(port);
console.log('started');
