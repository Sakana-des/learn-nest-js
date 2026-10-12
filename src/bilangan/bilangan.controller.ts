import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, BadRequestException } from '@nestjs/common';
import { BilanganService } from './bilangan.service.js';
import { CreateBilanganDto } from './dto/create-bilangan.dto.js';
import { UpdateBilanganDto } from './dto/update-bilangan.dto.js';
import { ParamsTokenFactory } from '@nestjs/core/internal';
import { DeretDto } from './dto/bilangan.dto.js';

@Controller('bilangan')
export class BilanganController {
  constructor(private readonly bilanganService: BilanganService) {}

  @Post()
  create(@Body() createBilanganDto: CreateBilanganDto) {
    return this.bilanganService.create(createBilanganDto);
  }

  @Get(':angka')
  countBilanganAngka(@Param('angka') angka : number){
    return {
      angka,
      jenis : angka % 2 === 0? "genap" : "ganjil",
      kuadrat : angka * angka,
      kelipatanLima : angka % 5 === 0? "true" : "false"
    }
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string) {
    return this.bilanganService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBilanganDto: UpdateBilanganDto) {
    return this.bilanganService.update(+id, updateBilanganDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bilanganService.remove(+id);
  }
  
  @Get('deret/:jenis')
  generateDeret(
  @Param('jenis') jenis: string,
  @Query() dto: DeretDto,
) {
  const jenisValid = ['ganjil', 'genap', 'kuadrat'];

  if (!jenisValid.includes(jenis)) {
    throw new BadRequestException(
      'Jenis harus ganjil, genap, atau kuadrat',
    );
  }

  const { data, total } = this.bilanganService.deretGenerate(
    jenis,
    dto.jumlah,
  );

  return {
    jenis,
    jumlah: dto.jumlah,
    data,
    total,
  };
  }
}
