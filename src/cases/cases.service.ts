import { Injectable } from '@nestjs/common';
import { Case } from 'src/cases/cases.entity';
import { CreateCaseDto, UpdateCaseDto } from 'src/cases/cases-dtos/cases.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CasesService {
  constructor(
    @InjectRepository(Case)
    private caseRepository: Repository<Case>,
  ) {}

  async create(createCaseDto: CreateCaseDto): Promise<Case> {
    const newCase = this.caseRepository.create(createCaseDto);
    return await this.caseRepository.save(newCase);
  }

  async findAll(): Promise<Case[]> {
    return await this.caseRepository.find();
  }

  async findOne(id: number): Promise<Case> {
    const found = await this.caseRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Case with ID ${id} not found`);
    }
    return found;
  }

  async update(id: number, updateCaseDto: UpdateCaseDto): Promise<Case> {
    await this.findOne(id);
    await this.caseRepository.update(id, updateCaseDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.caseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Case with ID ${id} not found`);
    }
  }
}
