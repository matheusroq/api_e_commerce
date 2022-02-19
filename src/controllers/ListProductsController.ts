import { Request, Response } from 'express';
import { ListProductsService } from '../services/ListProductsService';

export class ListProductsController {
  async handle(request: Request, response: Response) {
    try {
      const listProductService = new ListProductsService();
      const { searchTerm } = request.query;
      let search = '';
      if (typeof searchTerm === 'string') {
        search = searchTerm;
      }
      const listProducts = await listProductService.execute(search);
      return response.json(listProducts)
    } catch (error) {
      return response.json({ message: error.message })
    }
  }
}