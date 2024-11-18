const  mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      require: true
    },
    Description: {
      type: String,
      require: true
    },
    Date: {
      type: Date,
      require: true
    },
    Amount: {
      type: Number,
      require: true
    },
    Upload_Bill: {
      type: String,
      require: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Manager'
    },
    Society: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Society'
    }
  },
  {
    timestamps: true,
  }
);



const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
