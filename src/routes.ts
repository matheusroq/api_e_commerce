import { Router } from 'express';
import { CreateProductsController } from './controllers/CreateProductsController';
import { CreateProductsImagesController } from './controllers/CreateProductsImagesController';
import { ListProductsController } from './controllers/ListProductsController';

const routes = Router();

routes.get('/products', new ListProductsController().handle);
routes.post('/products', new CreateProductsController().handle);
routes.post('/images', new CreateProductsImagesController().handle);

export { routes };