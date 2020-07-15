import { model, Schema } from "mongoose";

const OfficeSchema = new Schema({
  description: String,
});

export default model("Office", OfficeSchema);
