import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cases')
export class Case {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  empresa: string;

  @Column({ type: 'text', nullable: false })
  mensagem: string;

  @Column({ type: 'varchar', nullable: false })
  media: string;
}
