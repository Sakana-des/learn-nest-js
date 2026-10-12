import { Injectable } from '@nestjs/common';
import { CreateBilanganDto } from './dto/create-bilangan.dto.js';
import { UpdateBilanganDto } from './dto/update-bilangan.dto.js';

@Injectable()
export class BilanganService {
  create(createBilanganDto: CreateBilanganDto) {
    return 'This action adds a new bilangan';
  }

  findAll() {
    return `This action returns all bilangan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bilangan`;
  }

  update(id: number, updateBilanganDto: UpdateBilanganDto) {
    return `This action updates a #${id} bilangan`;
  }

  remove(id: number) {
    return `This action removes a #${id} bilangan`;
  }

deretGenerate(jenis: string, jumlah: number) {
  const data: number[] = [];
  let total = 0;

  for (let i = 1; i <= jumlah; i++) {
    let nilai: number;

    if (jenis === 'ganjil') {
      nilai = 2 * i - 1;
    } else if (jenis === 'genap') {
      nilai = 2 * i;
    } else {
      nilai = i * i;
    }

    data.push(nilai);
    total += nilai;
  }

  return { data, total };
}
}
