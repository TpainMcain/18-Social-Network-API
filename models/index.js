// Import the 'User' model from the 'User.js' file in the same directory
const User = require("./User");

// Import the 'Thought' model from the 'Thought.js' file in the same directory
const Thought = require("./Thought");

// Export an object containing both the 'User' and 'Thought' models.
// This allows for these models to be imported together from other files by requiring this file
module.exports = { User, Thought };
