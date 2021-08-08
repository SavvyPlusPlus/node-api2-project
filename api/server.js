// implement your server here
const express = require('express');
// require your posts router and connect it here
const postsRouter = require('../api/posts/posts-router.js');

const server = express();

server.use(express.json());
server.use('/api/posts', postsRouter);

//Other
server.get('/', (req, res) => {
    res.send(`
      <h2>My Project API</h>
      <p>Welcome to the the API</p>
    `);
});

module.exports = server;