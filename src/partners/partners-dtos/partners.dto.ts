import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreatePartnerDto {
  @IsString()
  @IsNotEmpty()
  empresa: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  media: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  link: string;
}

export class UpdatePartnerDto {
  @IsString()
  @IsOptional()
  empresa?: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  media?: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  link?: string;
}
