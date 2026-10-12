import { PartialType } from '@nestjs/mapped-types';
import { CreateBilanganDto } from './create-bilangan.dto.js';

export class UpdateBilanganDto extends PartialType(CreateBilanganDto) {}
