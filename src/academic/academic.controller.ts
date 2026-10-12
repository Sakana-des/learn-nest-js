import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { AcademicService } from './academic.service.js';
import { CreateAcademicDto } from './dto/create-academic.dto.js';
import { UpdateAcademicDto } from './dto/update-academic.dto.js';
import { GradeDto, HitungNilaiDto } from './dto/grade.dto.js';

@Controller('academic')
export class AcademicController {
  constructor(private readonly academicService: AcademicService) {}

  @Post()
  create(@Body() createAcademicDto: CreateAcademicDto) {
    return this.academicService.create(createAcademicDto);
  }

  @Get()
  findAll() {
    return this.academicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicDto: UpdateAcademicDto) {
    return this.academicService.update(+id, updateAcademicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicService.remove(+id);
  }

  @Post('grade')
  convertGrade(@Body() dto: GradeDto) {
    let grade = 'E';
    if (dto.score >= 90) grade = 'A';
    else if (dto.score >= 80) grade = 'B';
    else if (dto.score >= 70) grade = 'C';
    else if (dto.score >= 60) grade = 'D';
      return { message: 'Grade converted', data: { score: dto.score, grade } };
  }   
  @Post('nilai/hitung')
  @HttpCode(200)
  hitung(@Body() dto: HitungNilaiDto) {
    return this.academicService.hitung(dto);
  }
}
