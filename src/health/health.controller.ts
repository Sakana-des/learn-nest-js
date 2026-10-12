import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthService } from './health.service.js';
import { CreateHealthDto } from './dto/create-health.dto.js';
import { UpdateHealthDto } from './dto/update-health.dto.js';
import { BmiDto } from './dto/bmi.dto.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post()
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Get()
  findAll() {
    return this.healthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthDto: UpdateHealthDto) {
    return this.healthService.update(+id, updateHealthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthService.remove(+id);
  }

  @Post('bmi')
  calculateBmi(@Body() dto: BmiDto) {
  const heightM = dto.heightCm / 100;
  const bmi = Number((dto.weightKg / heightM ** 2).toFixed(2));
  let status = 'Normal';
   if (bmi < 18.5) status = 'Underweight';
   else if (bmi >= 25 && bmi < 30) status = 'Overweight';
   else if (bmi >= 30) status = 'Obese';
    return { message: 'BMI calculated', data: { ...dto, bmi, status } };
}
}
