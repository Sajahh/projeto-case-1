import { IsString, IsNotEmpty, IsDate } from 'class-validator';

// create-category.dto.ts

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDate()
  date: Date;

  @IsString()
  @IsNotEmpty()
  ip: string;
}
