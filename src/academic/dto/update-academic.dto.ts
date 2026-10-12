import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademicDto } from './create-academic.dto.js';

export class UpdateAcademicDto extends PartialType(CreateAcademicDto) {}
