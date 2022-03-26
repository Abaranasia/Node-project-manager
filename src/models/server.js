const express = require('express');

const { dbConnection } = require('../database/config');

class Server {

  constructor() {
    this.app = express();
    //this.port = process.env.PORT;
    this.port = 3000;
    this.projectsPath = '/api/projects';
    this.employeesPath = '/api/employees';


    // Connect to database
    this.connectDB();

    //Middlewares - introduces additional functionalities between the req and the res
    //    this.middlewares();

    //Routes - define the way to enroute the website
    this.routes();
  };


  async connectDB() {
    await dbConnection();
  };


  routes() {
    /*  The routes can be defined here, but it's much more clear to
    extract them to routes folder and divede them by category */
    // this.app.get('/api', (req, res) => { res.json({msg: 'get API'})});

    // Instead of define here the routes, we import them from routes folder as if it was a middleware
    this.app.use(this.projectsPath, require('../routes/projects'))
    //    this.app.use(this.employeesPath, require('../routes/employees'))
  };

  listen() { // Listener function and possible feedback
    this.app.listen(this.port, () => {
      console.log(`Running server on port ${this.port}`);
    })
  };
};

module.exports = Server;