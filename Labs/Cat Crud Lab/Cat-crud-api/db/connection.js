import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/cat-api").catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
