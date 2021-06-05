const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // select:false by default the password field will not show
    password: { type: String, required: true, select: false },

    username: { 
        type: String,
        required: true, 
        unique: true,
        trim: true 
    },

    profilePicUrl: {
      type: String,
    },

    newMessagePopup: {
      type: Boolean,
      default: true,
    },

    unreadMessage: { 
        type: Boolean,
        default: false
    },

    unreadNotification: {
         type: Boolean, 
         default: false
    },

    // enum [there can be only two values inside this no other value than that]
    role: { 
        type: String,
        default: "user",
        enum: ["user", "root"]
     },

    resetToken: {
      type: String,
    },

    expireToken: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
