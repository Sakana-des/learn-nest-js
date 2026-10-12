import { Transform } from 'class-transformer';
import { IsIn } from 'class-validator';

export class CheckoutQueryDto {
  @Transform(({ value }) =>
    typeof value === 'string'
      ? value.trim().toLowerCase()
      : value,
  )
  @IsIn(['tunai', 'qris'], {
    message: 'metode hanya boleh tunai atau qris',
  })
  metode: string;
}