
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ClientProxyCRM } from '../../common/proxy/client-proxy';
import { Observable } from 'rxjs';
import { IBrand } from 'src/common/interfaces/brand.interface';
import { BrandMSG } from '../../common/constants';

@ApiTags('brands')
//@UseGuards(JwtAuthGuard)
@Controller('catalog/brand')
@Controller()

export class BrandsController {
  constructor(
    private readonly clientProxy: ClientProxyCRM) { }

  private _clientProxyBrand = this.clientProxy.clientProxyBrand();

  @Get('status')
  getStatus() {
    return this._clientProxyBrand.send(BrandMSG.STATUS, '');
  }

  @Post('')
  create(@Body() createBrandDto: CreateBrandDto): Observable<IBrand> {
    return this._clientProxyBrand.send(BrandMSG.CREATE, createBrandDto);
  }

  @Get()
  findAll() {
    return this._clientProxyBrand.send(BrandMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param() id: number) {
    // return this.brandsService.findOne(id);
  }

  @Patch(':id')
  update(@Body() updateBrandDto: UpdateBrandDto) {
    // return this.brandsService.update(updateBrandDto.id, updateBrandDto);
  }

  @MessagePattern('removeBrand')
  remove(@Payload() id: number) {
    // return this.brandsService.remove(id);
  }
}
