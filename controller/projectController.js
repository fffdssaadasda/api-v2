// const Project = require("../models/ProjectModel.js");
import Project from "../models/ProjectModel.js";
export const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    // const fileExt = req.file.mimetype.split("/")[1];
    const files = req.files;

    project.images = files?.images?.map((file) => file.filename);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    return next(err);
  }
};

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    return next(err);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(204).json("deleted!");
  } catch (err) {
    return next(err);
  }
};

export const deleteAllProjects = async (req, res, next) => {
  try {
    await Project.deleteMany();
    res.status(204).json("deleted All!");
  } catch (err) {
    return next(err);
  }
};
