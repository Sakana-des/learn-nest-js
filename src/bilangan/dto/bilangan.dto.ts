import { Transform, Type } from 'class-transformer';
import {
  IsNumber,
  IsPositive,
  Min,
  Max,
  IsIn,
  IsInt,
} from 'class-validator';

export class BilanganDto {
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(100)
  angka: number;
}

export enum JenisDeret {
  GANJIL = 'ganjil',
  GENAP = 'genap',
  KUADRAT = 'kuadrat',
}

export class DeretDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(20)
  jumlah: number;
}