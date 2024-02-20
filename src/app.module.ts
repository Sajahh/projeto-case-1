import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/category.module';
import { LeadsModule } from './leads/leads.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PartnersModule } from 'src/partners/partners.module';
import { CasesModule } from 'src/cases/cases.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 0000,
      username: 'usernameDB',
      password: 'senhaDB',
      database: 'site_parceiro_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    CategoriesModule,
    LeadsModule,
    StatisticsModule,
    PartnersModule,
    CasesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
