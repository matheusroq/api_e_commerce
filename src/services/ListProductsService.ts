import { getRepository } from 'typeorm';
import { ProductImages } from '../entities/ProductImages';
import { Products } from '../entities/Products';

interface ProductsAndImages {
  product: Products;
  images: ProductImages[];
}
export class ListProductsService {
  async execute(searchTerm?: string): Promise<ProductsAndImages[]> {
    const productRepo = getRepository(Products);
    let products = await productRepo.find();

    if (searchTerm) {
      products = await productRepo.createQueryBuilder('products').where(`name LIKE :name`, { name: `%${searchTerm}%` }).getMany();
    }
    const productImagesrepo = getRepository(ProductImages);

    const productAndImages = products.map(async (product) => {
      if (product.id) {
        const images = await productImagesrepo.find({ product_id: product.id });
        return {
          product,
          images
        }
      }
    });
    return Promise.all(productAndImages);
  }
}