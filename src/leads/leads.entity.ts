// lead.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('leads')
export class Lead {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  nome: string;

  @Column({ type: 'text', unique: false, nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  telefone: string;

  @Column({ type: 'text', nullable: false })
  empresa: string;

  @Column({ type: 'text', nullable: true })
  descricao_solucao: string;

  @Column({ type: 'date', nullable: true })
  data_criacao: Date;

  @Column({ type: 'text', nullable: true })
  ipv4: string;

  @Column({ type: 'time', nullable: true })
  hora_criacao: string;
}
