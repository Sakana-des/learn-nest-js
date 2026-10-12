import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { UtilityService } from './utility.service.js';
import { CreateUtilityDto } from './dto/create-utility.dto.js';
import { UpdateUtilityDto } from './dto/update-utility.dto.js';
import { TemperatureDto, TemperatureDto1 } from './dto/temperature.dto.js';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}

  @Post()
  create(@Body() createUtilityDto: CreateUtilityDto) {
    return this.utilityService.create(createUtilityDto);
  }

  @Get()
  findAll() {
    return this.utilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.utilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUtilityDto: UpdateUtilityDto) {
    return this.utilityService.update(+id, updateUtilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilityService.remove(+id);
  }

  @Post('temperature')
  convertTemperature(@Body() dto: TemperatureDto) {
  let result = dto.value;
  if (dto.from === 'CELSIUS' && dto.to === 'FAHRENHEIT') {
    result = (dto.value * 9) / 5 + 32;
  } else if (dto.from === 'FAHRENHEIT' && dto.to === 'CELSIUS') {
    result = ((dto.value - 32) * 5) / 9;
  }
    return {
    message: 'Temperature converted',
    data: {
      input: { value: dto.value, unit: dto.from },
      output: { value: Number(result.toFixed(2)), unit: dto.to },
    },
  };
  }

  @Get('suhu/konversi')
  convertSuhu(@Query() dto : TemperatureDto1) {
    const hasil = this.utilityService.convertSuhu(
    dto.nilai,dto.dari,dto.ke,
    )

  return{
    nilaiAwal : dto.nilai,
    dari : dto.dari,
    ke : dto.ke,
    hasil
  }
}
}
