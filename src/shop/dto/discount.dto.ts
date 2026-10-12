import { IsNotEmpty, IsNumber, IsPositive, Max, Min } from 'class-validator';

export class DiscountDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(100)
  discountPercent: number;
}
