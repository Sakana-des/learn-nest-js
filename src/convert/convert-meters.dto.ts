import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class convertMeteorDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1000000)
  meters: number;
}