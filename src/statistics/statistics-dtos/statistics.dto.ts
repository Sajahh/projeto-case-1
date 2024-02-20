
export class CreateStatisticsDto {
  nome: string;
  descricao: string;
  media?: number;
}

export class UpdateStatisticsDto {
  nome?: string;
  descricao?: string;
  media?: number;
}
