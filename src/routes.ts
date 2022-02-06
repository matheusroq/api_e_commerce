import { Router } from 'express';
import { CreateProductsController } from './controllers/CreateProductsController';
import { ListProductsController } from './controllers/ListProductsController';

const routes = Router();

routes.get('/products', new ListProductsController().handle);
routes.post('/products', new CreateProductsController().handle);

export { routes };