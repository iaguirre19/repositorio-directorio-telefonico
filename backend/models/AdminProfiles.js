import mongoose from "mongoose";

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
  phone: {
    type: String,
    default: null,
    trim: true,
  },
  token: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

const AdminProfiles = mongoose.model("UserAdmin", adminRoleSchema);
export default AdminProfiles