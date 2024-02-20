import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from 'src/categories/category-dtos/create-category.dto';

// categories.service.ts

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async createCategory(data: CreateCategoryDto): Promise<Category> {
    const newCategory = this.categoriesRepository.create(data);
    return await this.categoriesRepository.save(newCategory);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepository.find();
  }

  // Buscar uma categoria por ID
  async findOne(id: number): Promise<Category> {
    return await this.categoriesRepository.findOne({ where: { id: id } });
  }

  // Atualizar uma categoria por ID
  async update(id: number, data: CreateCategoryDto): Promise<void> {
    await this.categoriesRepository.update(id, data);
  }

  // Excluir uma categoria por ID
  async remove(id: number): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}
