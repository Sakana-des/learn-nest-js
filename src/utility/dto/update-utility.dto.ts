import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilityDto } from './create-utility.dto.js';

export class UpdateUtilityDto extends PartialType(CreateUtilityDto) {}
