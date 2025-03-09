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
export const geteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.projectId);
    res.status(200).json(project);
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
export const editProject = async (req, res, next) => {
  try {
    const editedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      req.body,
      { new: true }
    );

    res.status(200).json(editedProject);
  }catch (err) {
    return next(err)
  }
  // const files = req.files;
  // editedProject.images = [];
  // if (req.files) {
  //   editedProject.images = files?.images?.map((file) => file.filename);
  //   await editedProject.save();
  // }
};
