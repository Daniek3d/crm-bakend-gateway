import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { UserController } from './user.controller';

@Module({
  imports: [ProxyModule],
  controllers: [UserController],
  providers: [],
})
export class UserModule { }
