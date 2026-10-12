import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { CreateGeometryDto } from './dto/create-geometry.dto.js';
import { UpdateGeometryDto } from './dto/update-geometry.dto.js';
import { CircleAreaDto } from './dto/circle-area.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post()
  create(@Body() createGeometryDto: CreateGeometryDto) {
    return this.geometryService.create(createGeometryDto);
  }

  @Get()
  findAll() {
    return this.geometryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geometryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeometryDto: UpdateGeometryDto) {
    return this.geometryService.update(+id, updateGeometryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geometryService.remove(+id);
  }

  @Post('circle-area')
  calculateCircleArea(@Body() dto: CircleAreaDto) {
  const area = Math.PI * dto.radius ** 2;
    return {
      message: 'Circle area calculated',
      data: { radius: dto.radius, area: Number(area.toFixed(2)), unit: 'cm²' },
    };
  }

  
}
