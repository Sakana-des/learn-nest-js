import { Transform } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';

export class GradeDto {
  @IsNumber()
  @IsPositive()
  score : number;
}

export class HitungNilaiDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(100, { each: true })
  tugas: number[];

  @IsNumber()
  @Min(0)
  @Max(100)
  uts: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  uas: number;
}