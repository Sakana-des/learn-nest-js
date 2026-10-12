import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvertModule } from './convert/convert.module.js';
import { ShopModule } from './shop/shop.module.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { AcademicModule } from './academic/academic.module.js';
import { UtilityModule } from './utility/utility.module.js';
import { HealthModule } from './health/health.module.js';
import { BilanganModule } from './bilangan/bilangan.module.js';
import { KasirModule } from './shop/kasir/kasir.module.js';

@Module({
  imports: [ConvertModule, ShopModule, GeometryModule, AcademicModule, UtilityModule, HealthModule, BilanganModule, KasirModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
