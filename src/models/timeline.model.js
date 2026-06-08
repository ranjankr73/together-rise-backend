import mongoose, {Schema, model} from "mongoose";

const caseTimelineSchema = new Schema({
    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Case"
    },

    action: String,

    performedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

export const CaseTimeline = model("CaseTimeline", caseTimelineSchema);