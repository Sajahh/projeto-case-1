// products.controller.ts
import {
  Controller,
  Get,
  Body,
  Delete,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './products-dtos/create-product.dto';
import { UpdateProductDto } from './products-dtos/update-product.dto';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}


  @Post()
  async create(@Body() data: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(data);
  }

  @Get('category/:category')
  async readCategory(@Param('category') category: string): Promise<Product[]> {
    return this.productsService.getProductsByCategory(category);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.updateProduct(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.productsService.deleteProduct(id);
  }
}
