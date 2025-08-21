// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://eeenglishmen:Venky2005.,M@cluster0.iythfpz.mongodb.net/Venkyr')
//         .then(() => console.log(" MongoDB Connected Broh...!"))
//         .catch((err) => {
//             console.error("MongoDB connection error:.....Venky", err);
//             process.exit(1); // Optional: exit app if DB fails
//         });
// };


import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://eeenglishmen:Venky2005.,M@cluster0.iythfpz.mongodb.net/Venkyr')
    .then(() => console.log("MongoDB Connected Broh...!"))
    .catch((err) => {
      console.error("MongoDB connection error:.....Venky", err);
      process.exit(1);
    });
};
