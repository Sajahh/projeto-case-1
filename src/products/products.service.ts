// products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/products.entity';
import { CreateProductDto } from 'src/products/products-dtos/create-product.dto';
import { UpdateProductDto } from 'src/products/products-dtos/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}


  async createProduct(data: CreateProductDto): Promise<Product> {
    const newProduct = this.productsRepository.create(data);
    return await this.productsRepository.save(newProduct);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async getProductById(id: number): Promise<Product> {
    return await this.productsRepository.findOneBy({ id: id });
  }

  async getProductsByCategory(categoryName: string): Promise<Product[]> {
    return await this.productsRepository
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.categoria_id', 'category')
      .where('category.nome = :categoryName', { categoryName })
      .getMany();
  }

  async updateProduct(id: number, data: UpdateProductDto): Promise<Product> {
    await this.productsRepository.update(id, data);
    return this.getProductById(id);
  }

  async deleteProduct(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
