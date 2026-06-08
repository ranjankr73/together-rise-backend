import mongoose, {Schema, model} from "mongoose";

const studentSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: [
            'Male',
            'Female',
        ],
    },
    age: {
        type: Number,
        min: 5,
        max: 30
    },
    school: String,
    className: String,
    familyIncome: Number,
    fatherStatus: {
        type: String,
        required: true,
    },
    motherStatus: {
        type: String,
        required: true,
    },
    guardianName: String,
    address: {
        type: String,
    },
    contact: {
        type: String,
        match: /^\+?[1-9]\d{1,14}$/,
    },

},{timestamps:true}
);

export const Student = model("Student", studentSchema);