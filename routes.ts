import { Router } from 'express';
import { ListProductsController } from './src/controllers/ListProductsController';

const routes = Router();

routes.get('/products', new ListProductsController().handler);

export { routes };