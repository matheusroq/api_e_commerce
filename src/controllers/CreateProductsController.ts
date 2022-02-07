import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';
import { CreateProductsService } from '../services/CreateProductsService';

export class CreateProductsController {
  async handle(request: Request, response: Response) {
    const { name, price, description, category_name } = request.body;
    const categoryRepo = getRepository(Category);
    try {
      const category = await categoryRepo.findOne({ name: category_name });
      const createProductsService = new CreateProductsService()
      const product = await createProductsService.execute({ name, price, description, category });
      return response.json(product)
    } catch (error) {
      return response.json({ error: error.message })
    }

  }
}