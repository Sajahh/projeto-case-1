import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsEmail,
  IsTimeZone,
} from 'class-validator';

export class CreateLeadDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  empresa: string;

  @IsString()
  descricao_solucao: string;

  @IsDate()
  data_criacao: Date;

  @IsString()
  ipv4: string;

  @IsTimeZone()
  hora_criacao: string;
}
