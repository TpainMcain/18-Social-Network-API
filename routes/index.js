// Import the Express router function
const router = require("express").Router();

// Import the API routes from the ./api directory
const apiRoutes = require("./api");

// Use the API routes when their path starts with "/api"
router.use("/api", apiRoutes);

// If no API routes are hit, send the 404 page
// This middleware function is called when none of the above routes match the request
// It sends a 404 status code (Not Found) and an error message to the client
router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

// Export the router to be used in other parts of the application
module.exports = router;
