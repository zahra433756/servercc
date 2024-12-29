import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: true },
  // datePosted: { type: Date, default: Date.now },
  // applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const Job = mongoose.model("Job", jobSchema);

export default Job;