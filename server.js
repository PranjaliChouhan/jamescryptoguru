const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = createServer(server);
  const io = new Server(httpServer, {
    cors: {
      origin: '*', // Replace with your domain for production
    },
  });

  // WebSocket logic
  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (message) => {
      io.emit('message', message); // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  // Default Next.js handler for all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
