import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, unique: true },
    courses: [{ type: Schema.Types.ObjectId, ref: "Attachment" }],
  },
  { timestamps: true }
);

export const Category = models.Category || model("Category", CategorySchema);
