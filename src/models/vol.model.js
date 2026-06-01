import mongoose, {Schema, model} from "mongoose";

const volunteerSchema = new Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
},
    expertise: [String],
    experience: Number,
    availableHours: Number,
    bio: String,
    totalStudentAssigned: Number,
    contact: {
        type: String,
        match: /^\+?[1-9]\d{1,14}$/,
    },

},{timestamps:true}
);

export const Volunteer = model("Volunteer", volunteerSchema);