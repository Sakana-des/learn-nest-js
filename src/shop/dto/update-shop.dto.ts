import { PartialType } from '@nestjs/mapped-types';
import { CreateShopDto } from './create-shop.dto.js';

export class UpdateShopDto extends PartialType(CreateShopDto) {}
