import mongoose, {Schema, model} from "mongoose";
const notificationSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: [
          "CASE_CREATED",
          "CASE_ASSIGNED",
          "MESSAGE",
          "FEEDBACK_REMINDER",
          "CASE_RESOLVED"
      ]
  },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);
export const Notification = model("Notification", notificationSchema);