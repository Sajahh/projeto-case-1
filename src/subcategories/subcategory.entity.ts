// subcategory.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from 'src/categories/category.entity';
import { Product } from 'src/products/products.entity';

@Entity('subcategories')
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Category, (category) => category.id)
  categoria: Category;

  @OneToMany(() => Product, (product) => product.subcategoria_id)
  products: Product[];
}
