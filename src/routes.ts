import { Router } from 'express';
import { ListProductsController } from './controllers/ListProductsController';

const routes = Router();

routes.get('/products', new ListProductsController().handler);

export { routes };