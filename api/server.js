const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.get("/", function(req, res) {
    res.status(200).json({ enviroment: process.env.NODE_ENV });
})

server.use('/api', apiRouter);

module.exports = server;
