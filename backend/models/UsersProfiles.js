import mongoose, { mongo } from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    office: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    extention: {
        type: String,
        default: null,
        trim: true,
    },
    manager: {
        type: String,
        trim: true,
    },
    rol: {
        type: String,
        trim:true,
    }
});

const user = mongoose.model("User", userSchema);
export default user