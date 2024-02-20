import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateLeadDto } from './leads-dtos/create-lead.dto';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto) {

    let now = new Date();
    createLeadDto.data_criacao = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    createLeadDto.hora_criacao = new Date().toLocaleTimeString();
    return this.leadsService.createLead(createLeadDto);
  }

  @Get()
  findAll() {
    return this.leadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLeadDto: CreateLeadDto) {
    return this.leadsService.update(Number(id), updateLeadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsService.remove(Number(id));
  }
}
