// Import necessary dependencies from the Mongoose module
const { Schema, model } = require("mongoose");

// Define a schema for users
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,  // Each username should be unique
      trim: true,    // Remove whitespace at the beginning and end
      required: "Username is Required", // Username is a required field
    },

    email: {
      type: String,
      unique: true,  // Each email should be unique
      required: "Username is Required",  // Email is a required field
      match: [/.+@.+\..+/],  // The email should match the pattern of a valid email address
    },

    // 'thoughts' is an array of ObjectId's referring to the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    // 'friends' is an array of ObjectId's referring to the User model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,  // Include virtual properties when converting to JSON
    },
    id: false,
  }
);

// Define a virtual for the 'UserSchema' that returns the count of friends
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create a model from the 'UserSchema'
const User = model("User", UserSchema);

// Export the 'User' model
module.exports = User;
