let mongoose = require("mongoose");

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    //After upgrading mongoose required some key: value set in the connection object.
    let newFlag = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };

    //mongoose.connect("mongodb://wrbo:wwwwww111@ds337418.mlab.com:37418/wrbo", newFlag)
    mongoose
      .connect(
        "mongodb+srv://adminsector:AAAaaa111@cluster0.dkwwo.mongodb.net/cbnelue?retryWrites=true&w=majority",
        newFlag
      )
      .then(() => {
        console.log("Database connection to C.B.N. BANK was successful");
      })
      .catch((err) => {
        console.error("Database connection error " + err);
      });
  }
}

module.exports = new Database();
