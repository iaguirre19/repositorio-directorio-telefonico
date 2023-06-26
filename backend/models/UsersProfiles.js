// import mongoose from "mongoose";
// import idGenerator from "../helpers/idgenerator";


// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//         password: {
//       type: String,
//       required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//     },
//     phone: {
//         type: String,
//         default: null,
//         trim: true,
//     },
//     token: {
//       type: String,
//       default: idGenerator(),
//     },
//     confirmed: {
//       type: Boolean,
//       default: false,
//     },
// });