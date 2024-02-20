import { Module } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { PartnersController } from './partners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partner } from 'src/partners/partners.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partner])],
  providers: [PartnersService],
  controllers: [PartnersController],
})
export class PartnersModule {}
