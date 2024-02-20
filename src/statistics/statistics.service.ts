import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Statistics } from './statistics.entity';
import {
  CreateStatisticsDto,
  UpdateStatisticsDto,
} from './statistics-dtos/statistics.dto';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistics)
    private statisticsRepository: Repository<Statistics>,
  ) {}

  create(createStatisticsDto: CreateStatisticsDto) {
    const statistics = this.statisticsRepository.create(createStatisticsDto);
    return this.statisticsRepository.save(statistics);
  }

  findAll() {
    return this.statisticsRepository.find();
  }

  findOne(id: number) {
    return this.statisticsRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateStatisticsDto: UpdateStatisticsDto) {
    return this.statisticsRepository.update(id, updateStatisticsDto);
  }

  remove(id: number) {
    return this.statisticsRepository.delete(id);
  }
}
