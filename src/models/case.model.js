import mongoose, {Schema, model} from "mongoose";

const caseSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },

    categoryIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }],

    assignedVolunteerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer"
  },

  coordinatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},

ngoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ngo"
},

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
      default: "MEDIUM",
    },

    status: {
      type: String,
      enum: [
        "OPEN",
        "IN_PROGRESS",
        "PENDING",
        "RESOLVED",
        "CLOSED",
      ],
      default: "OPEN",
    },

    resolvedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Case = model("Case", caseSchema);