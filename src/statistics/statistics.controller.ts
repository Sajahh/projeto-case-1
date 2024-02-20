import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  CreateStatisticsDto,
  UpdateStatisticsDto,
} from './statistics-dtos/statistics.dto';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  create(@Body() createStatisticsDto: CreateStatisticsDto) {
    return this.statisticsService.create(createStatisticsDto);
  }

  @Get()
  findAll() {
    return this.statisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statisticsService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStatisticsDto: UpdateStatisticsDto,
  ) {
    return this.statisticsService.update(Number(id), updateStatisticsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statisticsService.remove(Number(id));
  }
}
