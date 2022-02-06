import { Request, Response } from 'express';
import { ListProductsService } from '../services/ListProductsService';

export class ListProductsController {
  async handle(request: Request, response: Response) {
    try {
      const listProductService = new ListProductsService();
      const listProducts = await listProductService.execute();
      return response.json(listProducts)
    } catch (error) {
      return response.json({ message: error.message })
    }
  }
}