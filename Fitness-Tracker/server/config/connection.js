const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = "your mongoose url";
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!");
  }
);

module.exports = mongoose.connection;


//mongodb+srv://anmol:anmol@cluster0.k5wk3fw.mongodb.net/Demox
