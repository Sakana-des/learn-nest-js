import {Injectable,BadRequestException,} from '@nestjs/common';
import { CheckoutKasirDto } from './dto/kasir.dto.js';

@Injectable()
export class KasirService {
  checkout(
    member: string,
    metode: string,
    dto: CheckoutKasirDto,
  ) {

    const memberValid = member.trim().toLowerCase();

    if (!['reguler', 'silver', 'gold'].includes(memberValid)) {
      throw new BadRequestException(
        'member hanya boleh reguler, silver, atau gold',
      );
    }

    const rincian: {
      nama: string;
      harga: number;
      qty: number;
      subtotal: number;
    }[] = [];

    for (let i = 0; i < dto.items.length; i++) {
      const item = dto.items[i] as Record<string, unknown>;
      const nomor = i + 1;

      if (
        typeof item.nama !== 'string' ||
        item.nama.trim() === ''
      ) {
        throw new BadRequestException(
          `Item ke-${nomor}: nama harus string dan tidak boleh kosong`,
        );
      }

      if (
        typeof item.harga !== 'number' ||
        !Number.isFinite(item.harga) ||
        item.harga <= 0
      ) {
        throw new BadRequestException(
          `Item ke-${nomor}: harga harus angka lebih dari 0`,
        );
      }

      if (
        typeof item.qty !== 'number' ||
        !Number.isInteger(item.qty) ||
        item.qty <= 0
      ) {
        throw new BadRequestException(
          `Item ke-${nomor}: qty harus bilangan bulat lebih dari 0`,
        );
      }

      const subtotalItem = item.harga * item.qty;

      rincian.push({
        nama: item.nama.trim(),
        harga: item.harga,
        qty: item.qty,
        subtotal: subtotalItem,
      });
    }

    const subtotal = rincian.reduce(
      (total, item) => total + item.subtotal,
      0,
    );

    const totalItem = rincian.reduce(
      (total, item) => total + item.qty,
      0,
    );

    let persenDiskon = 0;

    if (memberValid === 'silver') {
      persenDiskon = 5;
    } else if (memberValid === 'gold') {
      persenDiskon = 10;
    }

    const diskon = subtotal * persenDiskon / 100;
    const biayaAdmin = metode === 'qris'? (subtotal - diskon) * 0.01 : 0;
    const total = subtotal - diskon + biayaAdmin;

    return {
      member: memberValid,
      metode,
      rincian,
      totalItem,
      subtotal,
      diskon,
      biayaAdmin,
      total,
    };
  }
}