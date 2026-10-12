import { Module } from '@nestjs/common';
import { UtilityService } from './utility.service.js';
import { UtilityController } from './utility.controller.js';

@Module({
  controllers: [UtilityController],
  providers: [UtilityService],
})
export class UtilityModule {}
