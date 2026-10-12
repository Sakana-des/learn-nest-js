import { Injectable } from '@nestjs/common';
import { convertMeteorDto } from './convert-meters.dto.js';

@Injectable()
export class ConvertService {
  convertMeter(param: convertMeteorDto) {
    const kilometer = param.meters / 1000;
    const centimeter = param.meters * 100;
    const miles = Number((param.meters * 0.000621371).toFixed(3));
    return {
      success: true,
      message: 'Length converted',
      data: {
        meters: param.meters,
        kilometers: kilometer,
        centimeters: centimeter,
        miles,
      },
    };
  }
}
