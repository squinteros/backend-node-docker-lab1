import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('cpu')
  getCpuTest(): string {
    return this.appService.runCpuTask();
  }

  @Get('memory')
  getMemoryTest(@Query('size') size?: string): string {
    const mb = size ? parseInt(size, 10) : 1000; // 100 MB por defecto
    return this.appService.runMemoryTask(mb);
  }
}
