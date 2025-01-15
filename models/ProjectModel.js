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
projectSchema.pre("findOneAndUpdate", (next) => {
  const api_url = "https://portfolioapi-production-84ea.up.railway.app";
  this.previewImage = `${api_url}/images/${this.images[0]}`;
  console.log(this.previewImage);

  next();
});
export default projectModel;
