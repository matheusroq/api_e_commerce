import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';
import { Products } from '../entities/Products';

interface IProduct {
  name: string;
  price: number;
  description: string;
  category: Category;
}

export class CreateProductsService {
  async execute({ name, price, description, category }: IProduct): Promise<Products> {
    const repo = getRepository(Products);
    const product = await repo.save({ name, price, description, category_id: category.id });
    return product;
  }
}