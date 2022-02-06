import { getRepository } from 'typeorm';
import { ProductImages } from '../entities/ProductImages';
import { Products } from '../entities/Products';

interface IProductImages {
  product: Products;
  filename: string;
  original_filename: string;
  url: string;
}
export class CreateProductImagesService {
  async execute({ product, filename, original_filename, url }: IProductImages): Promise<ProductImages> {
    const repo = getRepository(ProductImages);
    const productImage = await repo.save({ filename, original_filename, url, product_id: product.id });
    return productImage;
  }
}