import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [BrandsController],
})
export class BrandsModule { }
