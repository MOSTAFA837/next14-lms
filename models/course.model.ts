import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema(
  {
    userId: { type: String },
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    attachments: [{ type: Schema.Types.ObjectId, ref: "Attachment" }],
  },
  { timestamps: true }
);

export const Course = models.Course || model("Course", CourseSchema);
