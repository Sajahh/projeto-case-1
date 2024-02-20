import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('partners')
export class Partner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  empresa: string;

  @Column({ type: 'text', nullable: false })
  descricao: string;

  @Column({ type: 'varchar', nullable: false })
  media: string;

  @Column({ type: 'varchar', nullable: true })
  link: string;
}
