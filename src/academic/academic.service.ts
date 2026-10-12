import { Injectable } from '@nestjs/common';
import { CreateAcademicDto } from './dto/create-academic.dto.js';
import { UpdateAcademicDto } from './dto/update-academic.dto.js';
import { HitungNilaiDto } from './dto/grade.dto.js';

@Injectable()
export class AcademicService {
  create(createAcademicDto: CreateAcademicDto) {
    return 'This action adds a new academic';
  }

  findAll() {
    return `This action returns all academic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academic`;
  }

  update(id: number, updateAcademicDto: UpdateAcademicDto) {
    return `This action updates a #${id} academic`;
  }

  remove(id: number) {
    return `This action removes a #${id} academic`;
  }

  hitung(dto: HitungNilaiDto) {
    const { nama, tugas, uts, uas } = dto;

    
    const jumlahTugas = tugas.reduce(
      (total, n) => total + n,
      0,
    );

    const rataTugas = jumlahTugas / tugas.length;
    const nilai = 
      (0.3 * rataTugas) +
      (0.3 * uts) +
      (0.4 * uas);

    const nilaiAkhir = Math.round(nilai * 100) / 100;
    let predikat: string;

    if (nilaiAkhir >= 90) {
      predikat = 'A';
    } else if (nilaiAkhir >= 80) {
      predikat = 'B';
    } else if (nilaiAkhir >= 70) {
      predikat = 'C';
    } else {
      predikat = 'D';
    }

    
    const status = nilaiAkhir >= 75? 'Lulus': 'Remedial';
    return {
      nama,
      rataTugas,
      nilaiAkhir,
      predikat,
      status,
    };
  }
}
