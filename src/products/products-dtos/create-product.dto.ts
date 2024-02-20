import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsArray,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsString()
  @IsNotEmpty()
  midia: string;

  @IsArray()
  @IsNotEmpty()
  requisitos: Array<string>;

  @IsArray()
  @IsNotEmpty()
  funcionalidades: Array<string>;

  @IsNumber()
  @IsOptional()
  categoryId?: number;
}
