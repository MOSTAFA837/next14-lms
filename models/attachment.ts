import { Schema, model, models } from "mongoose";

const AttachmentSchema = new Schema(
  {
    name: { type: String },
    url: { type: String },
    courseId: { type: Schema.Types.ObjectId, ref: "Course" },
  },
  { timestamps: true }
);

export const Attachment =
  models.Attachment || model("Attachment", AttachmentSchema);
