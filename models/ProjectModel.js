import { model, Schema } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "please provide project title"],
  },
  technologies: {
    type: [String],
    default: [],
    required: [true, "please provide technologies"],
  },
  images: {
    type: [String],
    default: [],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  description: String,
  link: {
    type: String,
  },
  previewImage: {
    type: String,
    default: "",
  },
});

const projectModel = new model("Project", projectSchema);

export default projectModel;
