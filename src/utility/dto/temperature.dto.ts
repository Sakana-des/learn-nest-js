import { Transform, Type } from 'class-transformer';
import { IsIn, IsNumber } from 'class-validator';

export class TemperatureDto {
  @IsNumber()
  value: number;

  @IsIn(['CELSIUS', 'FAHRENHEIT'])
  from: string;

  @IsIn(['CELSIUS', 'FAHRENHEIT'])
  to: string;
}

export class TemperatureDto1 {
  @Type(()=> Number)
  @IsNumber()
  nilai: number;

  @Transform(({ value }) =>
  typeof value === 'string' ? value.toUpperCase() : value,
  )
  @IsIn(['CELSIUS', 'FAHRENHEIT', 'KELVIN'])
  dari: string;

  @Transform(({ value }) =>
  typeof value === 'string' ? value.toUpperCase() : value,
  )
  @IsIn(['CELSIUS', 'FAHRENHEIT', 'KELVIN'])
  ke: string;
}