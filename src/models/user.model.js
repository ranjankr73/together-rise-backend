import mongoose,{Schema, model} from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [
            "STUDENT",
            "VOLUNTEER",
            "COORDINATOR",
            "ADMIN",
            "SUPER_ADMIN",
        ],
        default: "STUDENT",
    },
    phone: {
        type: String,
        unique: true,
        match: /^\+?[1-9]\d{1,14}$/,
    },
},{timestamps: true},
);
userSchema.index({ email: 1 });

export const User = model("User", userSchema);