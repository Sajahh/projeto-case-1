import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateCaseDto {
  @IsString()
  @IsNotEmpty()
  empresa: string;

  @IsString()
  @IsNotEmpty()
  mensagem: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  media: string;
}

export class UpdateCaseDto {
  @IsString()
  @IsOptional()
  empresa?: string;

  @IsString()
  @IsOptional()
  mensagem?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  media?: string;
}
