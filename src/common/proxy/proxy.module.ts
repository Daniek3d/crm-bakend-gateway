import { Module } from '@nestjs/common';
import { ClientProxyCRM } from './client-proxy';

@Module({
  providers: [ClientProxyCRM],
  exports: [ClientProxyCRM],
})
export class ProxyModule { }
