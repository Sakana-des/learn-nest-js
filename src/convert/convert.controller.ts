import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { convertMeteorDto } from './convert-meters.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get('/length/:meters')
  convertMeters(@Param() params: convertMeteorDto) {
    return this.convertService.convertMeter(params);
  }
}
