// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log("Mongo DB Connected: ", conn.connection.host);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/E-Commerce`);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
