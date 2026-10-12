import { PartialType } from '@nestjs/mapped-types';
import { CreateGeometryDto } from './create-geometry.dto.js';

export class UpdateGeometryDto extends PartialType(CreateGeometryDto) {}
