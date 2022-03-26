const { response, request } = require('express');

const Project = require('../models/project');

const projectsGet = async (req = request, res = response) => {


  const projects = await Project.find({});

  res.status(200).json({
    projects
  });
};

module.exports = {
  projectsGet
};