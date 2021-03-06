import { model, Schema } from "mongoose";

const EmployeeSchema = new Schema(
  {
    name: String,
    lastName: String,
    officeId: {
      type: Schema.Types.ObjectId,
      ref: "Office",
    },
    dateOfBirth: Date,
    salary: Number,
  },
  { timestamps: true }
);

export default model("Employee", EmployeeSchema);
