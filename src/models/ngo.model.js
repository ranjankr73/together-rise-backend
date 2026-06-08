import mongoose, {Schema, model} from "mongoose";

const ngoSchema= new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    phone: {
        type: String,
        match: /^\+?[1-9]\d{1,14}$/,
    },
    website: {
    type: String,
    trim: true,
},


},{timestamps: true}
);
export const Ngo = model("Ngo", ngoSchema);