const { response, request } = require('express');

const Project = require('../models/project');

// Lists all projects
const projectsGet = async (req = request, res = response) => {

  const projects = await Project.find({});
  res.status(200).json({
    projects
  });
};

// Lists one specific project by id
const projectGet = async (req = request, res = response) => {
  const { id } = req.params; // Reading URLparams with Express

  const project = await Project.findOne({ "id": id }, {});
  res.status(200).json({
    project
  });
};

module.exports = {
  projectsGet,
  projectGet
};