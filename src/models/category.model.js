import mongoose , {Schema, model} from "mongoose";
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    description: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
},{timestamps: true}
);

export const Category = model("Category", categorySchema);