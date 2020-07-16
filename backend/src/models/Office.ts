import { model, Schema } from "mongoose";

const OfficeSchema = new Schema(
  {
    description: String,
  },
  { timestamps: true }
);

export default model("Office", OfficeSchema);
