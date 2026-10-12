import { IsNumber, IsPositive, Min } from 'class-validator';

export class BmiDto {
  @IsNumber()
  @IsPositive()
  @Min(50)
  weightKg: number;

  @IsNumber()
  @IsPositive()
  @Min(50)
  heightCm: number;
}