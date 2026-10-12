import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto.js';
import { UpdateShopDto } from './dto/update-shop.dto.js';
import { DiscountDto } from './dto/discount.dto.js';

@Injectable()
export class ShopService {
  create(createShopDto: CreateShopDto) {
    return 'This action adds a new shop';
  }

  findAll() {
    return `This action returns all shop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shop`;
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }

  countDiscount(dto: DiscountDto) {
    const harga = dto.price;
    const discount = dto.discountPercent;
    const discountAmount = (harga * discount) / 100;
    const finalPrice = harga - discountAmount;

    return {
      success: true,
      message: 'Harga terhitung',
      data: {
        harga,
        discount: `${discount}%`,
        discountAmount,
        finalPrice,
      },
    };
  }
}
