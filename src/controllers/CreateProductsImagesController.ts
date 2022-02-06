import { Request, Response } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';
import { multerConfig } from '../config/multerConfig';
import { Products } from '../entities/Products';
import { CreateProductImagesService } from '../services/CreateProductImagesService';

export class CreateProductsImagesController {
  async handle(request: Request, response: Response) {
    const upload = multer(multerConfig).single('product_image');
    return upload(request, response, async (error) => {
      if (error) {
        return response.json({
          errors: [error.code]
        })
      }
      try {
        const { filename, originalname } = request.file;
        const { product_name } = request.body;
        const productRepo = getRepository(Products);
        const product = await productRepo.findOne({ name: product_name })
        if (product) {
          const createProductsImagesService = new CreateProductImagesService();
          const productImage = await createProductsImagesService.execute({
            product,
            filename,
            original_filename: originalname,
            url: `http://localhost:8000/uploads/${filename}`
          });
          return response.json(productImage)
        } else {
          return response.status(400).json({ error: 'Product doesn\'t exists. ' })
        }
      } catch (error) {
        return response.json({ error: error.message })
      }
    });
  }
}