import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUtilityDto } from './dto/create-utility.dto.js';
import { UpdateUtilityDto } from './dto/update-utility.dto.js';
import { TemperatureDto1 } from './dto/temperature.dto.js';
import { from } from 'rxjs';

@Injectable()
export class UtilityService {
  create(createUtilityDto: CreateUtilityDto) {
    return 'This action adds a new utility';
  }

  findAll() {
    return `This action returns all utility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utility`;
  }

  update(id: number, updateUtilityDto: UpdateUtilityDto) {
    return `This action updates a #${id} utility`;
  }

  remove(id: number) {
    return `This action removes a #${id} utility`;
  }

  convertSuhu(nilai : number, dari : string, ke : string) {
  let hasil = nilai

     if (dari === 'KELVIN' && ke === 'FAHRENHEIT') {
      hasil = ((nilai - 273.15) * 9) / 5 + 32;
    } else if (dari === 'KELVIN' && ke === 'CELSIUS') {
      hasil = nilai - 273.15;
    } else if (dari === 'CELSIUS' && ke === 'FAHRENHEIT') {
      hasil = (nilai * 9) / 5 + 32;
    } else if (dari === 'FAHRENHEIT' && ke === 'CELSIUS') {
      hasil = ((nilai - 32) * 5) / 9;
    } else if (dari === 'CELSIUS' && ke === 'KELVIN') {
      hasil = nilai + 273.15;
    } else if (dari === 'FAHRENHEIT' && ke === 'KELVIN') {
      hasil = ((nilai - 32) * 5) / 9 + 273.15;
    }
  return Number(hasil.toFixed(2))
}
}
