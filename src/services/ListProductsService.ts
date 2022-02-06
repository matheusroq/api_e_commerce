import { getRepository } from 'typeorm';
import { ProductImages } from '../entities/ProductImages';
import { Products } from '../entities/Products';

interface ProductsAndImages {
  product: Products;
  images: ProductImages[];
}
export class ListProductsService {
  async execute(): Promise<ProductsAndImages[]> {
    const productRepo = getRepository(Products);
    const products = await productRepo.find();
    const productImagesrepo = getRepository(ProductImages);

    const productAndImages = products.map(async (product, index) => {
      if (product.id) {
        console.log(product.id)
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