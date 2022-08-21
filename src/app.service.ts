import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'CRM API v1 - Microservices with NestJs';
  }
}
