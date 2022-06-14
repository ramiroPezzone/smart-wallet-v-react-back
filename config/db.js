const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión con la base de datos exitosa ✔️");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
