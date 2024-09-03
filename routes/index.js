import express from 'express';
const AppController = require('../controllers/AppController');
const router = express.Router();

const routeController = (app) => {
  app.use('/', router);

  // App Controller
  router.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  router.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

export default routeController;
