import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from 'src/categories/category.entity';
import { Subcategory } from 'src/subcategories/subcategory.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  valor: number;

  @Column({ nullable: true })
  midia: string;

  @Column({ type: 'text', array: true, nullable: true })
  requisitos: Array<string>;

  @Column({ type: 'text', array: true, nullable: true })
  funcionalidades: Array<string>;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoria_id' })
  categoria_id: Category;

  @ManyToOne(() => Subcategory)
  @JoinColumn({ name: 'subcategoria_id' })
  subcategoria_id: Subcategory;
}
