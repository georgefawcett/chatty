// server.js

const express = require('express');
const SocketServer = require('ws').Server;

const uuidV4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.


function updateUserCount() {

 // Update number of users to each user
  wss.clients.forEach(function each(client) {
      var message = {
        type: "usercount",
        number: wss.clients.size
      }
      client.send(JSON.stringify(message));
    });
}

wss.on('connection', (ws) => {
  console.log('Client connected');

  updateUserCount();



 ws.on('message', function incoming(message) {

  console.log(message);
  var parsedMessage = JSON.parse(message);
  console.log(parsedMessage);
  if (parsedMessage.type === "newmessage") {
  // If there is a message content being sent

    parsedMessage.id = uuidV4();

    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(parsedMessage));
    });

  } else if (parsedMessage.type === "newusername") {
  // If the user is updating username - broadcast back as is, with ID
  wss.clients.forEach(function each(client) {
      parsedMessage.id = uuidV4();
      client.send(JSON.stringify(parsedMessage));
    });

  }



  });





 //  ws.send('something');


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
    updateUserCount();
    });



});



