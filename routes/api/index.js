// Import the Express router function
const router = require("express").Router();

// Import the user routes from the 'user-routes.js' file
const userRoutes = require("./user-routes");

// Import the thought routes from the 'thought-routes.js' file
const thoughtRoutes = require("./thought-routes");

// When a request begins with "/users", Express will route it to the userRoutes
router.use("/users", userRoutes);

// When a request begins with "/thoughts", Express will route it to the thoughtRoutes
router.use("/thoughts", thoughtRoutes);

// Export the router to be used in other parts of the application
module.exports = router;
