import { IsNumber, IsPositive, Min } from 'class-validator';

export class CircleAreaDto {

  @IsNumber()
  @IsPositive()
  @Min(0.01)
  radius: number;
}