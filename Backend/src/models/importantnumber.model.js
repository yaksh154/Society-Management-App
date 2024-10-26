const  mongoose  = require("mongoose");

const importantnumberSchema = new mongoose.Schema(
  {
    Fullname: {
      type: String,
      require: true
    },
    Phonenumber: {
      type: Number,
      require: true
    },
    Work: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
  }
);


const Importantnumber = mongoose.model("Importantnumber", importantnumberSchema);

module.exports = Importantnumber;
