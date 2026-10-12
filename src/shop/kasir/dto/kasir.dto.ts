import {IsArray,ArrayMinSize,ArrayMaxSize,
} from 'class-validator';

export class CheckoutKasirDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  items: unknown[];
}