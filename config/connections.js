// Import the Mongoose library, which is used to interact with MongoDB databases
const mongoose = require("mongoose");

// Connect to the MongoDB database. The URI for the database is either taken from an environment variable 
// (useful when deploying to external services), or defaults to a local MongoDB instance
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social-network",
  {
    // These options are passed to the MongoDB driver to parse the connection string and
    // handle the connection in a way that adheres to modern MongoDB features and fixes
    // deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// This line sets a Mongoose option to output detailed logs of the MongoDB operations that Mongoose is performing. 
// This can be helpful for debugging, but may be unnecessary in a production environment
mongoose.set("debug", true);

// Export the connection. This allows other files to use the database connection that's been set up
module.exports = mongoose.connection;
