import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateLeadDto } from './leads-dtos/create-lead.dto';
import { Lead } from 'src/leads/leads.entity';

import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private leadsRepository: Repository<Lead>,
  ) {}

  async createLead(data: CreateLeadDto): Promise<Lead> {
    console.log(data);
    const newLead = this.leadsRepository.create(data);
 
    try {
      return await this.leadsRepository.save(newLead);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Erro ao criar lead');
    }
  }

  async findAll(): Promise<Lead[]> {
    return await this.leadsRepository.find();
  }

  async findOne(id: number): Promise<Lead> {
    return await this.leadsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: CreateLeadDto): Promise<void> {
    await this.leadsRepository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.leadsRepository.delete(id);
  }
}
