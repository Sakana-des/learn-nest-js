import {Controller,Post,Param,Query,Body,} from '@nestjs/common';
import { KasirService } from './kasir.service.js';
import { CheckoutKasirDto } from './dto/kasir.dto.js';
import { CheckoutQueryDto } from './dto/query.dto.js';

@Controller('kasir')
export class KasirController {
  constructor(
    private readonly kasirService: KasirService,
  ) {}

  @Post('checkout/:member')
  checkout(
    @Param('member') member: string,
    @Query() query: CheckoutQueryDto,
    @Body() dto: CheckoutKasirDto,
  ) {
    return this.kasirService.checkout(
      member,
      query.metode,
      dto,
    );
  }
}