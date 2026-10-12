import { Test, TestingModule } from '@nestjs/testing';
import { ShopService } from './shop.service.js';
import { NotFoundException } from '@nestjs/common';

describe('ShopService', () => {
  let service: ShopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopService],
    }).compile();

    service = module.get<ShopService>(ShopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('countDiscount', () => {
    it('should calculate discount with direct price and discount percentage', () => {
      const result = service.countDiscount({}, { price: 100000, discount: 10 });
      expect(result.success).toBe(true);
      expect(result.data.subtotal).toBe(100000);
      expect(result.data.discounts.coupon).toBe(10000);
      expect(result.data.grandTotal).toBe(90000);
    });

    it('should calculate discount with items, member status, and coupon', () => {
      const result = service.countDiscount(
        { member: true, coupon: 'HEMAT10' },
        {
          items: [
            { name: 'T-Shirt', price: 120000, qty: 2 },
            { name: 'Cap', price: 80000, qty: 1 },
          ],
        },
      );
      expect(result.success).toBe(true);
      expect(result.data.subtotal).toBe(320000);
      expect(result.data.discounts.member).toBe(16000);
      expect(result.data.discounts.coupon).toBe(32000);
      expect(result.data.grandTotal).toBe(272000);
    });

    it('should throw NotFoundException for invalid coupon', () => {
      expect(() =>
        service.countDiscount({ coupon: 'INVALID' }, { price: 100000 }),
      ).toThrow(NotFoundException);
    });
  });
});
