import express from 'express';

import MessageController from '../../modules/message/http/controllers/MessageController';

const routes = express.Router();

const classesController = new MessageController();

routes.post('/messages', classesController.create);
routes.get('/messages', classesController.index);
routes.patch('/messages/:id', classesController.patch);

export default routes;
