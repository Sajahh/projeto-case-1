import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lead } from 'src/leads/leads.entity';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lead]),
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}
