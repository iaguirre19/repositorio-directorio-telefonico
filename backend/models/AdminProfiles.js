// import mongoose from "mongoose";
// import bcrypt from 'bcrypt';
// import idGenerator from "../helpers/idgenerator.js";

// const adminRoleSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   rol: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   profilePicture: {
//     data: Buffer,
//   },
//   token: {
//     type: String,
//     default: idGenerator()
//   },
//   confirmed: {
//     type: Boolean,
//     default: false,
//   },
// });

// // Hashear el password 
// adminRoleSchema.pre("save", async function(next){
//   if(!this.isModified("password", )){
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);

// });

// adminRoleSchema.methods.comparePassword = async function(passwordForm){
//   return await bcrypt.compare(passwordForm, this.password);
// };



// const AdminProfiles = mongoose.model("userAdmin", adminRoleSchema);
// export default AdminProfiles



import mongoose from "mongoose";
import bcrypt from "bcrypt";
import idGenerator from "../helpers/idgenerator.js";

const adminRoleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  rol: {
    type: String,
    required: true,
    trim: true,
  },
  profilePicture: {
    data: Buffer,
  },
  token: {
    type: String,
    default: idGenerator(),
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

// Hashear el password
adminRoleSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

adminRoleSchema.methods.comparePassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
};

// Método para guardar la imagen en MongoDB
adminRoleSchema.methods.saveProfilePicture = async function (imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    this.profilePicture.data = imageBuffer;
    await this.save();
    console.log("Profile picture saved to MongoDB");
  } catch (error) {
    console.error("Error saving profile picture to MongoDB:", error);
  }
};

const AdminProfiles = mongoose.model("userAdmin", adminRoleSchema);
export default AdminProfiles;









