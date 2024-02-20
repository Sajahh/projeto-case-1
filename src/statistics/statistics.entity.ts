
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Statistics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  descricao: string;

  @Column({ nullable: true })
  media: number;
}
