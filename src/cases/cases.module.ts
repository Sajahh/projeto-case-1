import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Case } from 'src/cases/cases.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Case])],
  providers: [CasesService],
  controllers: [CasesController],
})
export class CasesModule {}
