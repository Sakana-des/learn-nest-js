import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopService } from './shop.service.js';
import { CreateShopDto } from './dto/create-shop.dto.js';
import { UpdateShopDto } from './dto/update-shop.dto.js';
import { DiscountDto } from './dto/discount.dto.js';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopService.update(+id, updateShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopService.remove(+id);
  }

  @Post('discount')
  countDiscount(@Body() dto: DiscountDto) {
    return this.shopService.countDiscount(dto);
  }

  @Post('discount')
  calculateDiscount(@Body() dto: DiscountDto) {
  const saved = dto.price * (dto.discountPercent / 100);
    return {
      message: 'Discount calculated',
      data: {
        originalPrice: dto.price,
        discountPercent: dto.discountPercent,
        savedAmount: Number(saved.toFixed(0)),
        finalPrice: Number((dto.price - saved).toFixed(0)),
      },
    };
  }

  

}
