import express from 'express';
import imgList from './api/imgList';
import imgResize from './api/imgResize';
import viewImg from './api/viewImage';

const routes = express.Router();

routes.use('/', imgList);
routes.use('/images', imgResize);
routes.use('/image', viewImg);

export default routes;
