import mongoose, {Schema, model} from "mongoose";
const feedback = new Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Case",
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    isSatisfied: {
        type: Boolean,
        required: true,
    },
    message: {
        type: String,
        maxlength: 500
    }


},{timestamps: true}
);
export const Feedback = model("Feedback", feedback);