const  mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { type } = require("os");

const managerSchema = new mongoose.Schema(
  {
    Firstname: {
      type: String,
      require: true
    },
    Lastname: {
      type: String,
      require: true
    },
    Email: {
      type: String,
      require: true
    },
    Number: {
      type: Number,
      require: true
    },
    Country: {
      type: String,
      require: true
    },
    State: {
      type: String,
      require: true
    },
    society:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Society'
    },
    City: {
      type: String,
      require: true
    },
    Password: {
      type: String,
      require: true
    },
    Rol:{
      type:String,
      enum: ['Security', 'Resident', 'Manager'],
      require:true,
      default: 'Manager'
    }
  },
  {
    timestamps: true,
  }
);


managerSchema.pre('save', async function (next) {
  const manager = this;
  if (!manager.isModified('Password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(manager.Password, salt);
    manager.Password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});


const Manager = mongoose.model("Manager", managerSchema);

module.exports = Manager;
