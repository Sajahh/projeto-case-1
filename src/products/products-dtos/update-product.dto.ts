import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsNumber()
  @IsOptional()
  valor?: number;

  @IsString()
  @IsOptional()
  midia?: string;

  @IsString()
  @IsOptional()
  requisitos?: Array<string>;

  @IsString()
  @IsOptional()
  funcionalidades?: Array<string>;

  @IsNumber()
  @IsOptional()
  categoryId?: number;
}
