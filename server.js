// Import the Express framework, which is used for setting up web servers
const express = require("express");

// Import the database configuration, which sets up a connection to the database
const db = require("./config/connections");

// Import the routes for the server, which define how it responds to HTTP requests
const routes = require("./routes");

// Initialize an Express application. This provides functionality for setting up a web server
const app = express();

// Set the port number that the server will listen on. This can either be provided by the environment variable "PORT" 
// (useful when deploying to external services), or it will default to 3001
const PORT = process.env.PORT || 3001;

// Use Express's built-in JSON middleware to automatically parse JSON request bodies
app.use(express.json());

// Use Express's built-in urlencoded middleware to automatically parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Add the routes to the Express application
app.use(routes);

// Wait for the database to open a connection, then start the server
db.once("open", () => {
  // Start the server and have it listen on the provided port number
  app.listen(PORT, () => {
    // Log to the console that the server has started and on what port it's running
    console.log(`API server running on port ${PORT}!`);
  });
});
