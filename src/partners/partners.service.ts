import { Injectable, NotFoundException } from '@nestjs/common';
import { Partner } from 'src/partners/partners.entity';
import {
  CreatePartnerDto,
  UpdatePartnerDto,
} from 'src/partners/partners-dtos/partners.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>,
  ) {}

  async create(createPartnerDto: CreatePartnerDto): Promise<Partner> {
    const newPartner = this.partnerRepository.create(createPartnerDto);
    return await this.partnerRepository.save(newPartner);
  }

  async findAll(): Promise<Partner[]> {
    return await this.partnerRepository.find();
  }

  async findOne(id: number): Promise<Partner> {
    const found = await this.partnerRepository.findOne({
      where: { id: id },
    });
    if (!found) {
      throw new NotFoundException(`Partner with ID ${id} not found`);
    }
    return found;
  }

  async update(
    id: number,
    updatePartnerDto: UpdatePartnerDto,
  ): Promise<Partner> {
    await this.findOne(id); // This will throw an error if partner doesn't exist
    await this.partnerRepository.update(id, updatePartnerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.partnerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Partner with ID ${id} not found`);
    }
  }
}
